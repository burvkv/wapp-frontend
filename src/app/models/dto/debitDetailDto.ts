export interface DebitDetailDto{
    debitId:number;
    ownerName:string;
    hardwareType:string[];
    hardwareLabel:string[];
    hardwareModel:string[]
    hardwareBarcode:string[];
    debitStatus:string;
    projectName:string;
    olderOwnerName:string;
    explanation:string;
    isCurrent:boolean;
    lastChange:Date;
    personalName:string;
}