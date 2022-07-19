import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-card',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() searchValue = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
}
