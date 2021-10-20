import client from '../database';

export type product = {
    id:number;
    name:string;
    price:number;


}

export class products_model{
    async index():Promise<product[]>{
        try{
            const conn=client.connect();
            const sql="SELECT* FROM product";
            const result=  (await conn).query(sql);

            (await conn).release();
            return  (await result).rows;

        }
        catch(err){
            throw new Error("Error is here ${err}");
            
        }
        
       
    }
    async show(id:number):Promise<product>{
        try{
            const conn=client.connect();
            const sql="SELECT* FROM product where id=($1)";
            const result=  (await conn).query(sql,[id]);

            (await conn).release();
            return  (await result).rows[0];

        }
        catch(err){
            throw new Error("Error is here ${err}");
            
        }
        
       
    }
    async create(name:string,price:number){
        try{
            const conn=client.connect();
            const sql="INSERT INTO  product ($1,$2)";
            const result=  (await conn).query(sql,[name,price]);

            (await conn).release();
            return  (await result).rows[0];

        }
        catch(err){
            throw new Error("Error is here ${err}");
            
        }
        
       
    }
}

