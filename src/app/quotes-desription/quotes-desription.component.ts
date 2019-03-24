import { Component, OnInit, Input} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-desription',
  templateUrl: './quotes-desription.component.html',
  styleUrls: ['./quotes-desription.component.css']
})
export class QuotesDesriptionComponent implements OnInit {
@Input() quote:Quotes;
  constructor() { }

  ngOnInit() {
  }

}
