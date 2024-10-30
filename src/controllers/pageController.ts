import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObjects'

export const home = (req:Request, res:Response) =>{
    res.render('pages/pages', {
        menu:createMenuObject('all'),
        
        banner: {
            title:'Todas as plantas',
            background:'allanimals.jpg'
        }
    })
}

export const sementes = (req:Request, res:Response) =>{
    res.render('pages/pages', {
        menu:createMenuObject('sementes'),

        banner: {
            title:'Todas as sementes',
            background:'sementes.webp'
        }
    })
}