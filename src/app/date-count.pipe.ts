import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any ): number{
    let today:Date = new Date(); //get current day and time
    console.log(value)
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference =Math.abs(todayWithNoTime-value) //milliseconds
    console.log(dateDifference);
    const secondsInADay= 86400;
    var dateDifferenceSeconds=dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInADay;
    console.log(dateCounter)
    if (dateCounter >= 1 && value <todayWithNoTime){
      return dateCounter;
  }
  else{
    return 0;

  }
}
}


