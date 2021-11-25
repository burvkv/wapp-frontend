export interface Debit{
    debitId:number;
    debitStatusId:number;
    olderOwnerId:number;
    ownerId:number;
    isCurrent:boolean;
    lastChange:Date;
    hardwareIds:string;
    projectId:number;
    explanation:string;
    personalId:number;
    debitFormPath?:string;
}