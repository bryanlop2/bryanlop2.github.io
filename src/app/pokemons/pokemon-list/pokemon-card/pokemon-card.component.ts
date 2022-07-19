import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pokemonColorMap } from '../../utils/pokemonColorHash';
import { Pokemon } from '../../utils/types';
import { colors, getPokemonImageUri } from '../../utils/values';

@Component({
  selector: 'pokemons-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonData: Pokemon[] = [];
  loading: boolean;

  constructor(private router: Router) {
    this.loading = false;
  }

  ngOnInit(): void {
  }

  getBackgroundColors(pokemon: Pokemon) {
    let color;
    const mainColors = Object.values(pokemonColorMap);
    if (pokemon.url) color = mainColors[this.getId(pokemon.url) - 1];
    return color;
  }

  getNumbers(pokemon: Pokemon) {
    if (pokemon.url) return ('00' + this.getId(pokemon.url)).slice(-3);
    else return undefined;
  }

  getImages(pokemon: Pokemon) {
    if (pokemon.url) return getPokemonImageUri(this.getId(pokemon.url));
    else return null;
  }

  getId(link: string) {
    const url = link.split('/'),
      index = url[url.length - 2];
    return +index;
  }

  goToPokemonProfile(pokemon: Pokemon) {
    if (pokemon.url)
      this.router.navigate([`/pokedex/${this.getId(pokemon.url)}`]);
  }
}
