import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-desription',
  templateUrl: './quotes-desription.component.html',
  styleUrls: ['./quotes-desription.component.css']
})
export class QuotesDesriptionComponent implements OnInit {
@Input() quote:Quotes;
@Output() isDelete = new EventEmitter<boolean>();

quoteDelete(complete:boolean){
  this.isDelete.emit(complete);
}
  constructor() { }

  ngOnInit() {
  }

}
