import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes =[ 
    new Quotes(1, "Failure will never overtake me if my determination to succeed is strong enough","Og mandino", "ACL", new Date(2019,3,24)),
    new Quotes(2, "With the new day comes new strenth and new thoughts.","Eleaner Roosevelt", "TLC",new Date(2019,3,24)),
    // new Quotes(3, "Change your life today. Don't gamble on the future, act now, without delay.", "Simone de Beauior", "Disney", new Date(2019,3,24)),
    // new Quotes(4, "Optisim is the faith that leads to achievement. Nothing can be done without hope and confidence.", "Hellen Keller", "HellenTT", new Date(2019,3,24)),
    // new Quotes(5, "Good, better, best. Never let it rest. 'Til your good is better and your better is best.", "St. Jerome", "Brainy", new Date(2019,3,24))
]
addNewQuote(quote){
  let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)


}

  constructor() { }

  ngOnInit() {
  }
  
  
  upvotes(index){
     this.quotes[index].upvote++;

  }
  downvotes(index){
    this.quotes[index].downvote++;
  }
deleteQuote(isDelete, index){
if(isDelete){
  this.quotes.splice(index,1);
}
}
}
