export interface Hardware{
    id:number;
    barcode:string;
    labelId:number;
    modelId:number;
    type:string;
    isDefective:boolean;
    explanation?:string;
    isDebitted:boolean;
}