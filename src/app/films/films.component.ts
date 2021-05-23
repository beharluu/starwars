import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { Film } from '../_models';
import { FilmsService } from '../_services';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchQuery: any;
  paginate: {length: number, pageIndex: number} = {length: 0, pageIndex: 1};
  films: Film[] = [];
  displayedColumns: string[] = ['id', 'title', 'created', 'updated'];
  dataSource = new MatTableDataSource<Film>();
  filmsSub: Subscription;
  isLoading: boolean;

  constructor(
    private filmService: FilmsService
  ) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {

    if (this.isLoading) { this.destroyRequest(); }
    this.isLoading = true;
    this.filmsSub = this.filmService.getFilms({search: this.searchQuery, page: this.paginate.pageIndex}).subscribe(
      res => {
        this.paginate.length = res.totalCount;
        this.films = res.films;
        this.dataSource = new MatTableDataSource<Film>(this.films);
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
      }
    );
  }

  onPaginateChange(event: any) {
    this.paginate.pageIndex = event.pageIndex + 1;
    this.getFilms();
  }

  searchFilms() {
    this.clearPaginate();
    this.getFilms();
  }

  sortData(sort: any) {
    // I HAVEN'T FOUND SORT IMPLEMENTED ON API;
    console.log(sort);
  }

  destroyRequest() {
    this.filmsSub.unsubscribe();
  }

  clearPaginate() {
    this.paginator.pageIndex = 0;
    this.paginate = {length: 0, pageIndex: 0};
  }

}
