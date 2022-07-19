import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { PokedexService } from "../pokedex.service";
import { Pokemon } from '../utils/types';

@Injectable({
    providedIn: 'root'
})

export class PokemonsResolver implements Resolve<{results: Pokemon[]}> {
    constructor(private pokedexService: PokedexService) {}

    resolve() {
        return this.pokedexService.getPokemonList(52, 0);
    }

}