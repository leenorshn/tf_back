import {PrismaClient} from '@prisma/client';
import { Request, Response } from 'express';


const db=new PrismaClient();

const createPlanteur=async (req:Request,res:Response)=>{
    const {name,commune,rue,ville,phone}=req.body;
    try {
        const planteur=await db.planteur.create({
            data:{
                name,
                adresse:{
                    create:{
                        commune,
                        rue,
                       ville 
                    }
                },
                phone
            }
        });
        return res.status(201).json(planteur);
    } catch (error) {
        return res.status(500).json({error});
    }
}

const getPlanteur=async (req:Request,res:Response)=>{
    try {
        const planteurs=await db.planteur.findMany({});
        return res.status(201).json(planteurs);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export {createPlanteur,getPlanteur};