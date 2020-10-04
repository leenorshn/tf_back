import {PrismaClient} from '@prisma/client';
import { Request, Response } from 'express';


const db=new PrismaClient();

const createEnquette=async (req:Request,res:Response)=>{
    const {champId,fermentation,sechage,tail ,etat_plante,
        observation,agronome_id}=req.body;
    try {
        const enquette=await db.pratiqueagricole.create({
            data:{
                fermentation,

                sechage,
                tail,
                champ:{
                    connect:{
                        id:champId
                    }

                },
                utilisateur:{
                        connect:{
                            id:agronome_id
                        }
                },
                
                etat_plante,
                observation
            }
        });
        res.status(201).json(enquette);
    } catch (error) {
        res.status(500).json({error});
    }
}

const getAllEnquette=async (req:Request,res:Response)=>{
    try {
        const enquettes=await db.pratiqueagricole.findMany({
            include:{
                utilisateur:true,
                champ:true,
            }
        });
        res.status(200).json(enquettes);
    } catch (error) {
        res.status(500).json({error});
    }
}

export {getAllEnquette,createEnquette}