import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-search',
  templateUrl: './search.html',
  styleUrls: [ './search.less' ]
})
export class SearchComponent  {
  faSearch = faSearch;
}