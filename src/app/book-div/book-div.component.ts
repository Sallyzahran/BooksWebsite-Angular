import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-div',
  templateUrl: './book-div.component.html',
  styleUrls: ['./book-div.component.css']
})
export class BookDivComponent {
  @Input() book!:any;

}
