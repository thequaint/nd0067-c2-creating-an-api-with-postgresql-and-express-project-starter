import client from "../database";

import bcrypt from 'bcrypt';

import dotenv from 'dotenv';

dotenv.config();

const {
    ROUNDS
}=process.env




export type user={

   id:number,
   name:string,
   password:string

}


export class  user_model{
    async create(name:string,password:string){
        try{
            
            const hash=bcrypt.hashSync(password,1);
            const conn=client.connect();
            const sql="INSERT INTO  users ($1,$2)";
            const result=  (await conn).query(sql,[name,password]);

            (await conn).release();
            return  (await result).rows[0];

        }
        catch(err){
            throw new Error("Error is here ${err}");
            
        }
        
       
    }



}

