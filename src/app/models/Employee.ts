export interface Employee{
    employeeId:number;
    firstName:string;
    lastName:string;
    phoneNumber:string;
    email:string;
    address:string;
    projectId:number;
    employeeStatus:boolean;
    enterDate:Date;
    leftDate?:Date;
}