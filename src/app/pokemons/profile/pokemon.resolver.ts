import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { PokemonProfile } from '../utils/types';
import { PokedexService } from '../pokedex.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonResolver implements Resolve<PokemonProfile> {
  constructor(private pokedexService: PokedexService) {}

  resolve(route: ActivatedRouteSnapshot): PokemonProfile | Observable<PokemonProfile> | Promise<PokemonProfile> {
    return this.pokedexService.getPokemonDetails(
      route.paramMap.get('id') || '1'
    );
  }
}
