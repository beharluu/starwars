import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmsRoutingModule } from './films-routing.module';

import { FilmsComponent } from './films.component';
import { ShowFilmComponent } from './show-film/show-film.component';



@NgModule({
  declarations: [FilmsComponent, ShowFilmComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FilmsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatListModule
  ]
})
export class FilmsModule { }
