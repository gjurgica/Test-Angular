export class TaskModel{
    id:number;
    description:string;
    from:any;
    to:any;
    status?:string;
    created? = new Date();
    modified?:any;
    userId:number;
    constructor(id: number, description: string,from:Date,to:Date,status:string,userId:number) {
        this.id = id;
        this.description = description;
        this.from = from;
        this.to = to;
        this.status = status;
        this.userId = userId
    }
}