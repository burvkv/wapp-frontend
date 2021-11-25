export interface DebitForAddDto{
    debitId:number;
    debitStatusId:number;
    oldeROwnerId:number;
    ownerId:number;
    isCurrent:boolean;
    lastChange:Date;
    hardwareIds:number[];
    projectId:number;
    explanation?:string;
    personalId:number;
    debitformPath:number;
}