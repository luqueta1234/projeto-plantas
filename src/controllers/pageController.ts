import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObjects'
// Importando o model
import {Plants} from '../models/plants'

export const home = (req:Request, res:Response) =>{
    let list = Plants.getAll()
    res.render('pages/pages', {
        menu:createMenuObject('all'),
        
        banner: {
            title:'Todas as plantas',
            background:'allanimals.jpg'
        },
        list
    })
}

export const sementes = (req:Request, res:Response) =>{
    let list = Plants.getFromType('sementes')
    res.render('pages/pages', {
        menu:createMenuObject('sementes'),

        banner: {
            title:'Todas as sementes',
            background:'sementes.webp'
        },
        list
    })
}