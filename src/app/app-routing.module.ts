import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '', redirectTo: 'characters', pathMatch: 'full'
      },
      {
        path: 'characters',
        loadChildren: () => import(`./characters/characters.module`).then(
          module => module.CharactersModule
        )
      },
      {
        path: 'films',
        loadChildren: () => import(`./films/films.module`).then(
          module => module.FilmsModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
