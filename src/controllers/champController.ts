import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
const db = new PrismaClient();

const createChamp = async (req: Request, res: Response) => {
    const { superficie,
        axe,
        etat,
        nombre_tige,
        village,
        nombre_culture,
        pl_name,
        commune,
        ville,
        rue,
        pl_phone,
        secteur, } = req.body;
    try {
        const champ = await db.champ.create({
            data: {
                superficie,
                axe,
                etat,
                nombre_tige,
                village,
                secteur,
                nombre_culture,
                planteur: {
                    create: {
                        name: pl_name,
                        adresse: {
                            create: {
                                ville,
                                rue,
                                commune
                            },
                        },
                        phone: pl_phone
                    }
                }
            }
        });
        return res.status(201).json(champ);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

const getAllChamps = async (req: Request, res: Response) => {
    try {
        const champs = await db.champ.findMany({ include: { planteur: true, pratiqueagricole: true } });
        return res.status(200).json(champs);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export { getAllChamps, createChamp }