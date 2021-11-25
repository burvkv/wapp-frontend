import { Byte } from "@angular/compiler/src/util";

export interface User{
    id:number;
    firstName:string;
    lastName:string;
    username:string;
    passwordHash:Byte[];
    passwordSalt:Byte[];
    status:boolean;
}