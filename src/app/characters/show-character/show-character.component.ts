import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from '../../_models';
import { CharactersService } from '../../_services';

@Component({
  selector: 'app-show-character',
  templateUrl: './show-character.component.html',
  styleUrls: ['./show-character.component.scss']
})
export class ShowCharacterComponent implements OnInit {

  character: Character;

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const characterId = this.route.snapshot.params['id'];
    this.getCharacter(characterId);
  }

  getCharacter(id: string) {
    this.characterService.getCharacterById(id).subscribe(
      res => {
        this.character = res;
      },
      err => {

      }
    );
  }

}
