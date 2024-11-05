import {Request, Response} from 'express'
import { Plants } from '../models/plants'
import { createMenuObject } from '../helpers/createMenuObjects'

export const search = (req:Request, res:Response)=>{

    let query: string = req.query.q as string
    let list = Plants.getFromName(query)

    res.render('pages/pages',{
        menu:createMenuObject(''),
        list
    })
}