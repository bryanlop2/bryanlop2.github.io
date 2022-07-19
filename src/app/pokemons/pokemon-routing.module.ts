import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon.component';
import { PokemonResolver } from '../pokemons/profile/pokemon.resolver';
import { PokemonProfileComponent } from './profile/pokemon-profile.component';
import { PokemonsResolver } from './pokemon-list/pokemons.resolver';
import { NgModule } from '@angular/core';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    resolve: {
      pokemons: PokemonsResolver,
    },
  },
  {
    path: 'add',
    component: PokemonAddComponent
  },
  {
    path: ':id',
    component: PokemonProfileComponent,
    resolve: {
      pokemon: PokemonResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
