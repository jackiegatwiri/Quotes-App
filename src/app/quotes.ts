export class Quotes {
    public showDescription:boolean;
    public upvote:number;
    public downvote:number;
    constructor(public id:number, public description:string, public author:string, public publisher:string, public startDate:Date){
        this.showDescription=false
        this.upvote=0;
        this.downvote=0;
    }
}
