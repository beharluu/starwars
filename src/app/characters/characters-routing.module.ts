import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { ShowCharacterComponent } from './show-character/show-character.component';


const routes: Routes = [
  {
    path: '', component: CharactersComponent
  },
  {
    path: ':id', component: ShowCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
