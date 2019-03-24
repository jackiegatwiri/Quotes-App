import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes =[ 
    new Quotes(1, "Failure will never overtake me if my determination to succeed is strong enough","Og mandino", "ACL"),
    new Quotes(1, "With the new day comes new strenth and new thoughts.","Eleaner Roosevelt", "TLC"),
    new Quotes(1, "Change your life today. Don't gamble on the future, act now, without delay.", "Simone de Beauior", "Disney"),
    new Quotes(1, "Optisim is the faith that leads to achievement. Nothing can be done without hope and confidence.", "Hellen Keller", "HellenTT"),
    new Quotes(1, "Good, better, best. Never let it rest. 'Til your good is better and your better is best.", "St. Jerome", "Brainy")
]


  constructor() { }

  ngOnInit() {
  }

}
