/* PRECISAREMOS DE 3 FUNÇÕES DIFERENTES

1. PEGAR TODOS OS ITENS
2. FILTRAR POR TIPO (DOG, CAT, FISH)
3. FILTRAR ITENS PELO NOME

*/

type PlantType = 'plant' | 'sementes'

type Plants = {
    type: PlantType
    image: string,
    name: string,
    scientificname: string
}

const data: Plants[] = [

    { 
        type: 'plant', 
        image: 'samambaia.jpg', 
        name: 'Samambaia',
        scientificname: 'Pteridium aquilinum'
    }, 

    { 
        type: 'plant', 
        image: 'espadadesãojorge.jpg', 
        name: 'Espada de São Jorge',
        scientificname: 'Sansevieria trifasciata'
    }, 

    { 
        type: 'plant', 
        image: 'moreia.webp', 
        name: 'Moreias',
        scientificname: 'Muraenidae'
    }, 

    { 
        type: 'plant', 
        image: 'orelha-de-elefante.webp', 
        name: 'Orelha-de-elefante',
        scientificname: 'Colocasia gigantea'
    }, 

    { 
        type: 'plant', 
        image: 'Hera.webp', 
        name: 'Hera',
        scientificname: 'Aloe Vera'
    }, 

    { 
        type: 'plant', 
        image: 'irisdapraia.jpg', 
        name: 'Íris Azul',
        scientificname: 'Crássula Ovata'
    }, 

    { 
        type: 'plant', 
        image: 'geranio.jfif', 
        name: 'Gerânio',
        scientificname: 'Hélice de Hedera'
    }, 

    { 
        type: 'plant', 
        image: 'jasmimfalso.jpg', 
        name: 'Falso Jasmim',
        scientificname: ''
    }, 

    { 
        type: 'plant', 
        image: 'cravo.webp', 
        name: 'Cravo'

    }, 

    { 
        type: 'plant', 
        image: 'lavanda.webp', 
        name: 'Lavanda'
    }, 

    { 
        type: 'plant', 
        image: 'laurotino.jfif', 
        name: 'Laurustino'
    }, 

    { 
        type: 'plant', 
        image: 'amor-perfeito.jpg', 
        name: 'Amor-perfeito'
    }, 

    { 
        type: 'plant', 
        image: 'agapanthus.webp', 
        name: 'Agapanthus'
    }, 

    { 
        type: 'plant', 
        image: 'crisantemo.webp', 
        name: 'Crisantêmo',
    }, 
]

export const Plants = {

    /* Vamos retornar todos os itens para exibir na página principal
    essa função vai retornar data que é onde estão nossos itens */

    getAll:() =>{
        return data
    },

    getFromType: (type: PlantType): Plants[] =>{
        return data.filter(item => {
        /*
            Se o  LEON! item type for igual ao type
            que eu recebi no meu parametro (PlantType)
            então retorne true para esse item
        */
       if(item.type == type){
            return true
        } else {
            return false
        }

        })
    },

    getFromName:(name: string): Plants[] => {
        return data.filter(item =>{

            if(item.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
                return true
            }  else {
                return false
            }
        })
    }

}