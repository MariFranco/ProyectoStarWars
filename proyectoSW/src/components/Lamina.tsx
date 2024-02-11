import Naves from "../Naves";

interface ILamina {
    nombre : string;
    url : string;
    tipo : string;
}

interface IPelicula {
    title : string;
    url : string;
}

interface INave {
    name : string;
    url : string;
}

interface IPersonaje {
    name : string;
    url : string;
}



{/*Esta función obtiene las laminas*/}
async function getLamina(){

    const laminasCaso1 = [
        ...(await obtenetPersonajesRandom(3)),
        ...(await obtenerNavesRandom(2))
    ]

}

async function obtenetPersonajesRandom(cant: number): Promise<ILamina[]> {
    const personajes: IPersonaje[] = [];
    for (let i = 0; i<cant; i++) {
        const randomPersonajes = getRandom(82);
        const responsePersonaje = await fetch('https://swapi.dev/api/people/' + randomPersonajes);
        const responseJsonPersonaje: IPersonaje  = await responsePersonaje.json();
        personajes.push(responseJsonPersonaje)
    }
    return personajes.map(personaje => ({ nombre: personaje.name, url: personaje.url, tipo: 'personaje'}))
}

async function obtenerNavesRandom(cant: number): Promise<ILamina[]> {
    const naves: INave[] = [];
    for (let i=0; i<cant; i++){
        const randomNaves = getRandom(36);
        const responseNave = await fetch('https://swapi.dev/api/starships/' + randomNaves);
        const responseJsonNave: INave  = await responseNave.json();
        naves.push(responseJsonNave)
    }
    return naves.map(naves => ({nombre: naves.name, url: naves.url, tipo: 'nave'}))
}

async function obtenerPeliculasRandom(): Promise<ILamina[]> {
    const peliculas: IPelicula[] = [];
    const randomPeliculas = getRandom(6);
    const responsePelicula = await fetch('https://swapi.dev/api/films/' + randomPeliculas);
    const responseJsonPelicula  = await responsePelicula.json();
    peliculas.push(responseJsonPelicula)
    
    return peliculas.map(peliculas => ({nombre: peliculas.title, url: peliculas.url, tipo: 'pelicula'}))
}

const getRandom = (range: number, base = 1) => {
    return Math.floor(Math.random() * range) + base
}
