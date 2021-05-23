import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/_services';
import { Film } from '../../_models';

@Component({
  selector: 'app-show-film',
  templateUrl: './show-film.component.html',
  styleUrls: ['./show-film.component.scss']
})
export class ShowFilmComponent implements OnInit {

  film: Film;

  constructor(
    private route: ActivatedRoute,
    private filmSerivce: FilmsService
  ) { }

  ngOnInit(): void {
    const characterId = this.route.snapshot.params['id'];
    this.getCharacter(characterId);
  }

  getCharacter(id: string) {
    this.filmSerivce.getFilmById(id).subscribe(
      res => {
        this.film = res;
      },
      err => {

      }
    );
  }


}
