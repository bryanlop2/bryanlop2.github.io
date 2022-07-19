import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../utils/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon.compoment.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any;
  data: any[] = [];
  pokemonData: Pokemon[] = [];
  pokemon: Pokemon[] = [];
  findPokemon = '';
  limit: number = 52;
  offset: number = 0;
  searchedPokemons: Pokemon[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
    private pokedexService: PokedexService) {
    this.loading = false;
  }

  ngOnInit(): void {
    const pokemons = this.router.snapshot.data["pokemons"];
    this.pokemon = pokemons.results.map(this.normalizePokemon, this);
    this.pokemonData = this.pokemon;
    this.getPage();
    let data = localStorage.getItem('pokemonAPI');
    if(data)
    this.pokemons = JSON.parse(data);
  }

  getPage() {
    this.pokemonData = [];
    this.pokedexService
      .getPokemonList(this.limit, this.offset)
      .subscribe((data: { results: Pokemon[] }) => {
        this.pokemonData = [...this.pokemonData, ...data.results];
        this.searchedPokemons = this.pokemonData;
        this.loading = false;
        this.offset += this.limit;
      });
  }

  private normalizePokemon(pokemon: {name: string; url: string}) {
    return({
      name: pokemon.name,
      url: pokemon.url
    })
  }

  searchPokemon(pokemon: string) {
    this.pokemonData = this.searchedPokemons.filter((res) =>
      res.name.includes(pokemon)
    );
  }

  loadMorePokemons(): void {
    this.loading = true;
    this.getPage();
  }

}
