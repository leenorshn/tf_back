import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const db = new PrismaClient();

const createUser = async (req: Request, res: Response) => {
    const { email,
        name,
        password,
        commune,
        rue,
        ville,
        role, } = req.body;
    try {
        const utilisateur = await db.utilisateur.create({
            data: {
                email,
                name,
                password,
                role,
                adresse: {
                    create: {
                        commune,
                        rue,
                        ville
                    }
                }
            }
        });
        res.status(201).json(utilisateur);
    } catch (error) {
        res.status(500).json({error});
    }
}

const login=async (req:Request,res:Response)=>{
     const{email,password}=req.body;
    try {
       const user=await db.utilisateur.findOne({where:{email}}); 
       if(!user){
           return res.status(404).json("user not ");
       }
       if(password!==user.password){
        return res.status(400).json("bad request"); 
       }
       return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getAllUser=async (req:Request,res:Response)=>{
    try {
        const users=await db.utilisateur.findMany({
           
        });
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({err:error.message});
    }
}


export {getAllUser,createUser,login}