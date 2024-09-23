import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  searchTerm: string = '';

  @Output() searchTermChange = new EventEmitter<string>();

  onSearchChange() {
    this.searchTermChange.emit(this.searchTerm);
  }

}
