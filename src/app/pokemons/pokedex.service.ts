import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonProfile } from './utils/types';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private http: HttpClient) {}
  private api = 'https://pokeapi.co/api/v2';
  private evolution = 'evolution-chain';

  getPokemonList(limit: number, offset: number) {
    return this.http.get(
      `${this.api}/pokemon?limit=${limit}&offset=${offset}`
    ) as Observable<{ results: Pokemon[] }>;
  }

  getPokemonDetails(pokemon: number | string | null) {
    return this.http.get(this.api + '/pokemon/' + pokemon);
  }

  getPokemonSpecies(pokemon: number | string | null) {
    return this.http.get(`${this.api}/pokemon-species/${pokemon}`) as Observable<{ results: PokemonProfile[] }>;
  }

  getPokemonGeneration(pokemon: number | string) {
    return this.http.get(`${this.api}/generation/${pokemon}`);
  }

  getPokemonEvolutiontree(pokemon: number | string) {
    return this.http.get(`${this.api}/${this.evolution}/${pokemon}`)
  }

  getPokemonImage(pokemon: number | string) {
    return this.http.get(`${this.api}/${this.evolution}/${pokemon}`)
  }

}
