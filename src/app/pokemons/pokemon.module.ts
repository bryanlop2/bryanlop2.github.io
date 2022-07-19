import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonListComponent } from './pokemon-list/pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { PokemonProfileComponent } from './profile/pokemon-profile.component';
import { PokemonCardComponent } from './pokemon-list/pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';

const materialModules = [
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule
]

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonProfileComponent,
    PokemonCardComponent,
    PokemonAddComponent
  ],
  imports: [CommonModule, FormsModule, CoreModule, PokemonRoutingModule, ReactiveFormsModule, ...materialModules],
  exports: [ ],
  providers: [],
})
export class PokemonModule {}
