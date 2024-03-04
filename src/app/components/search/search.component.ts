import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;

  @Output() searchEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl('')
    });

    this.searchForm.get('searchTerm')!.valueChanges.subscribe(value => {
      this.searchEmitter.emit(value);
    });
  }
}
