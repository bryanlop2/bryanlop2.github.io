import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PokemonWelcomeComponent } from './pokemons/pokemon-welcome/pokemon-welcome.component';

const routes: Routes = [
  {
    path: 'pokedex',
    loadChildren: ()=> import('./pokemons/pokemon.module').then(m => m.PokemonModule)
  },
  { path: '', component: PokemonWelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
