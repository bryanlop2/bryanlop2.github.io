import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonProfile } from '../utils/types';
import { getPokemonImageUri } from '../utils/values';
import { pokemonTypeColorMap } from '../utils/pokemonColorHash';

@Component({
  selector: 'pokemon-profile-card',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})

export class PokemonProfileComponent implements OnInit {
  id: string | number | null;
  fields: any = [];
  species: any;
  evolution: any;
  profile: PokemonProfile[] = [];
  pokemon: any = [];

  constructor(
    private location: Location,
    private pokedexService: PokedexService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getInfoForFields();
    this.getEvolutionChain();
    this.getSpecies();
  }

  goBack(): void {
    this.location.back();
  }

  getInfoForFields() {
    this.pokedexService.getPokemonDetails(this.id).subscribe((details: PokemonProfile) => {
        this.fields = details;
      });
  }

  getSpecies() {
    this.pokedexService.getPokemonSpecies(this.id).subscribe((species) => {
      this.species = species;
    });
  }

  getNumbers() {
    return ('00' + this.id).slice(-3);
  }

  getEvolutionChain() {
    this.pokemon.evolutions = [];
    this.pokedexService.getPokemonSpecies(this.id).subscribe((response: any) => {
      const id = this.getId(response.evolution_chain.url);
      this.pokedexService.getPokemonEvolutiontree(id)
        .subscribe((response: any) => this.getEvolves(response.chain));
    })
  }

  getEvolves(chain: any) {
    this.pokemon.evolutions.push({
      id: this.getId(chain.species.url),
      name: chain.species.name,
      image: this.getImages(chain.species.url),
    });

    if (chain.evolves_to.length) {
      this.getEvolves(chain.evolves_to[0]);
    }
  }

  getId(url: string): number {
    const splitUrl = url.split('/');
    return +splitUrl[splitUrl.length - 2];
  }

  getImages(pokemon: string): string | null {
    if (pokemon) return getPokemonImageUri(this.getId(pokemon));
    else return null;
  }

  goToPokemonProfile(id: number) {
    this.router.navigateByUrl(`/pokedex/${id}`);
    this.id = id;
    this.getInfoForFields();
    this.getEvolutionChain();
    this.getSpecies();
  }

  getTypesColors(type: string): string | undefined {
    let color;
    const mainColors = Object.values(pokemonTypeColorMap);
    if (type) color = mainColors[this.getColorIndex(type)];
    return color;
  }

  getColorIndex(color: string | number) {
    const colors = Object.keys(pokemonTypeColorMap);
    const index = colors.findIndex((param) => param === color);
    return index;
  }
}
