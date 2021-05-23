import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { Character } from '../_models';
import { CharactersService } from '../_services';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchQuery: any;
  paginate: {length: number, pageIndex: number} = {length: 0, pageIndex: 1};
  characters: Character[] = [];
  displayedColumns: string[] = ['id', 'name', 'birthYear', 'created', 'updated'];
  dataSource = new MatTableDataSource<Character>();
  characterSub: Subscription;
  isLoading: boolean;

  constructor(
    private characterService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {

    if (this.isLoading) { this.destroyRequest(); }
    this.isLoading = true;
    this.characterSub = this.characterService.getCharacters({search: this.searchQuery, page: this.paginate.pageIndex}).subscribe(
      res => {
        this.paginate.length = res.totalCount;
        this.characters = res.characters;
        this.dataSource = new MatTableDataSource<Character>(this.characters);
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
      }
    );
  }

  onPaginateChange(event: any) {
    this.paginate.pageIndex = event.pageIndex + 1;
    this.getCharacters();
  }

  searchCharacters() {
    this.clearPaginate();
    this.getCharacters();
  }

  sortData(sort: any) {
    // I HAVEN'T FOUND SORT IMPLEMENTED ON API;
    console.log(sort);
  }

  destroyRequest() {
    this.characterSub.unsubscribe();
  }

  clearPaginate() {
    this.paginator.pageIndex = 0;
    this.paginate = {length: 0, pageIndex: 0};
  }

}
