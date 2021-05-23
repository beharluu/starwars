import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CharactersRoutingModule } from './characters-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CharactersComponent } from './characters.component';
import { ShowCharacterComponent } from './show-character/show-character.component';


@NgModule({
  declarations: [CharactersComponent, ShowCharacterComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatListModule
  ]
})
export class CharactersModule { }
