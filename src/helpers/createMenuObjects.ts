type menuOptions = '' | 'all' |'sementes'

export const createMenuObject = (activeMenu:menuOptions )=>{

    let returnObject = {
        all: false,
        sementes: false
    }

    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    } else {
            return returnObject
    }

}