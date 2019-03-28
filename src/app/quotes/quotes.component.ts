import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes =[ 
    new Quotes(1, "Failure will never overtake me if my determination to succeed is strong enough","Og mandino", "ACL", new Date(2019,0,24)),
    new Quotes(2, "With the new day comes new strenth and new thoughts.","Eleaner Roosevelt", "TLC",new Date(2019,1,24)),
    new Quotes(3, "Change your life today. Don't gamble on the future, act now, without delay.", "Simone de Beauior", "Disney", new Date(2019,3,24)),
    // new Quotes(4, "Optisim is the faith that leads to achievement. Nothing can be done without hope and confidence.", "Hellen Keller", "HellenTT", new Date(2019,3,24)),
    // new Quotes(5, "Good, better, best. Never let it rest. 'Til your good is better and your better is best.", "St. Jerome", "Brainy", new Date(2019,3,24))
]
store:number
obj:number
count:number
addNewQuote(quote){
  let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)


}

  constructor() { }

  ngOnInit() {
  }
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
  
  highUpvote(){
this.store=0
this.obj=0

for(this.count=0; this.count<this.quotes.length; this.count++){
  this.obj = this.quotes[this.count].upvote;
  if(this.obj > this.store){
    this.store = this.obj
  }
}
return this.store;
  }
  
  upvotes(index){
     this.quotes[index].upvote++;

  }
  downvotes(index){
    this.quotes[index].downvote++;
  }
deleteQuote(isDelete, index){
if(isDelete){
  let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].description}`)
  this.quotes.splice(index,1);
}
}
}