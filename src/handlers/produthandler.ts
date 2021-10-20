import express,{Request,Response, Router} from 'express';

import { product,products_model } from '../Models/poduct_model';

import app from '../server';

const pmodel=new products_model();

const index=async (req:Request,res:Response)=>{

    const result= await pmodel.index();

    res.json(result);

}

const  product_index_route=app.get("/",index);

export{ product_index_route};
