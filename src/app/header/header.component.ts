import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-header',
  templateUrl: './header.html',
  styleUrls: [ './header.less' ]
})
export class HeaderComponent  {
  faStar = faStar;
}