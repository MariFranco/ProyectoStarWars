import {
    ILamina,
    IPelicula,
    INave,
    IPersonaje,
} from '../types'



{/*Esta función obtiene las laminas*/}
export function getLamina(personajes: IPersonaje[], naves: INave[], peliculas: IPelicula[]) : ILamina[]{
    // console.log({personajes, naves, peliculas})
    const caso = getRandom(2);
    if (caso == 1){
        {/*caso 1 = 3 personajes 2 naves*/}
        return [
            ...( obtenetPersonajesRandom(3, personajes)),
            ...( obtenerNavesRandom(2, naves))
        ]
    }
    else {
        {/*caso 2 = 1 pelicula 3 personajes 1 nave*/}
        return [
            ...( obtenerPeliculasRandom(peliculas)),
            ...( obtenetPersonajesRandom(3, personajes)),
            ...( obtenerNavesRandom(1, naves))
        ]
    }  
}



{/*aqui se obtiene el personaje random*/}
function obtenetPersonajesRandom(cant: number, personajes: IPersonaje[]): ILamina[] {
    const temppersonajes: IPersonaje[] = [];
    console.log(personajes)
    for (let i = 0; i<cant; i++) {
        const randomPersonajes = getRandom(9, 0);
        //console.log(randomPersonajes)
        const responseJsonPersonaje: IPersonaje  = personajes[randomPersonajes];
        // console.log(responseJsonPersonaje)
        temppersonajes.push(responseJsonPersonaje)
    }
    // console.log(temppersonajes)
    return temppersonajes.map(personaje => ({nombre: personaje.name, url: personaje.url, tipo: 'personaje'}))
}

{/*aqui se obtiene la nave random*/}
function obtenerNavesRandom(cant: number, naves: INave[]): ILamina[] {
    const tempNaves: INave[] = [];
    for (let i=0; i<cant; i++){
        const randomNaves = getRandom(9, 0);
        const responseJsonNave: INave  = naves[randomNaves];
        tempNaves.push(responseJsonNave)
    }
    return tempNaves.map(nave => ({nombre: nave.name, url: nave.url, tipo: 'nave'}))
}

{/*aqui se obtiene la pelicula random*/}
function obtenerPeliculasRandom(peliculas: IPelicula[]): ILamina[] {
    const temppeliculas: IPelicula[] = [];
    const randomPeliculas = getRandom(5, 0);
    const responseJsonPelicula: IPelicula = peliculas[randomPeliculas];
    temppeliculas.push(responseJsonPelicula)
    
    return temppeliculas.map(pelicula => ({nombre: pelicula.title, url: pelicula.url, tipo: 'pelicula'}))
}

const getRandom = (range: number, base = 1) => {
    return Math.floor(Math.random() * range) + base
}
