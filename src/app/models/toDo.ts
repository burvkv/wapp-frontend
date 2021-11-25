export interface ToDo{
    todoId:number;
    employeeId:number;
    explanation:string;
    date:Date;
    processName:string;
    status:boolean;
    userId:number;
    note?:string;
}