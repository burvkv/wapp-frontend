export interface DebitForGetDto{
    debitId:number;
    ownerName:string;
    projectName:string;
    explanation:string;
    isCurrent:boolean;
    lastChange:Date;
}