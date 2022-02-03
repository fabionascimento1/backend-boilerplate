import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller('')
export class IndexControler{
    
    @Get('')
    private getAll(req: Request, res: Response){
        return res.status(200).json({
            message: 'controller ok Ok'
        })
    }
}