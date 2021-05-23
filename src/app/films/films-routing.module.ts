import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films.component';
import { ShowFilmComponent } from './show-film/show-film.component';

const routes: Routes = [
  {
    path: '', component: FilmsComponent
  },
  {
    path: ':id', component: ShowFilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
