import { useEffect, useState } from "react";
import { ILamina, INave, INaveAlbum, IPelicula, IPeliculaAlbum, IPersonaje, IPersonajeAlbum } from "./types";
import { useOutletContext } from "react-router-dom";
import { MyAppState } from "./store/reducer";
import { saveCharacters, saveFilms, saveNavesAlbum, savePeliculasAlbum, savePersonajesAlbum, saveStarships } from "./store/actions";
import "./ObtenerLaminas.css"
import { getLamina } from "./utils";
import { sleep } from "./utils/sleep";

{/*Esta es la pagina que me muestra las cartas para obtener lamina*/}
function ObtenerLaminas() {
    const [appState, dispatch] = useOutletContext<[MyAppState, Function]>();
    const [loading, setLoading] = useState(true);
    const [laminas, setLaminas] = useState <ILamina[]> ([]);
    const [disableButtonAbrir, setDisableButtonAbrir] = useState(false);
    const [disableButtonAgregar, setDisableButtonAgregar] = useState(true);
    const [openedChest, setOpenedChests] = useState<Number[]>([]);
    const [laminasObtenidas, setLaminasObtenidas] = useState<string[]>([]); 
    const [segundosTranscurridos, setSegundosTranscurridos] = useState(0);

    useEffect(() => {
        {/*me traigo todo del API, lo convierto en JSON y lo pego al context*/}
        const fetchData = async () => {
            const responsePersonaje = await fetch('https://swapi.dev/api/people/');
            const responseJsonPersonaje  = await responsePersonaje.json();
            dispatch(saveCharacters(responseJsonPersonaje.results as IPersonaje[]));
            dispatch(savePersonajesAlbum(responseJsonPersonaje.results as IPersonajeAlbum[]))

            const responsePelicula = await fetch('https://swapi.dev/api/films/');
            const responseJsonPelicula  = await responsePelicula.json();
            dispatch(saveFilms(responseJsonPelicula.results as IPelicula[]));
            dispatch(savePeliculasAlbum(responseJsonPelicula.results as IPeliculaAlbum[]))


            const responseNave = await fetch('https://swapi.dev/api/starships/');
            const responseJsonNave  = await responseNave.json();
            dispatch(saveStarships(responseJsonNave.results as INave[]));
            dispatch(saveNavesAlbum(responseJsonNave.results as INaveAlbum[]))
            setLoading(false)
        }
        fetchData();
        setLaminasObtenidas([]);
    }, [])
    // ternario
    // if (condition) {actionTrue} else {actionFalse}
    // condition ? actionTrue : actionFalse
    return loading ? <h1>Cargando...</h1>:(
    <div className="sobresGeneral">
        <h1>Sobres sorpresa</h1>
        <p>Selecciona un sobre para obtener láminas nuevas</p>
        <p>Puedes abrir el siguiente sobre en: {segundosTranscurridos}s</p>
        <div className="contenedor-flex">
            {[1,2,3,4].map(id => (
                <div className="sobres" key={"sobre" + id}>
                    <div><img src="../images/sobre.png" width={80}/></div>
                    <button onClick={() => {handleClick(id)}} disabled={disableButtonAbrir || openedChest.includes(id)}>Abrir</button>
            </div>
        ))}
        </div>
        <h2 className="resultadoSobre">OBTUVISTE LAS SIGUIENTES LÁMINAS:</h2>
        <div className="sobres-resultado">
            {laminas.map(lamina => (
                <div className="info-lamina">                  
                    <h2>{lamina.nombre}</h2>
                    <p>Tipo: {lamina.tipo}</p>
                    <p>Lámina # {lamina.url.split('/').filter(Boolean).pop()}</p>
                    <br />
                    <button onClick={handleClickAdd}>Agregar</button>
                </div>
            ))} 
        </div>
        {/* map de laminas obtenidas: ILmaina[] => renderizas las vueltas*/}
      </div>
    );

async function handleClick (id: number) {
    setOpenedChests(prevState => [...prevState, id]);
    const newLaminas = getLamina(appState.personajes!, appState.naves!, appState.peliculas!);
    setLaminas (newLaminas);
    const newUrl = newLaminas.map(lamina => lamina.url);
    const UrlsSinRepetir = newUrl.filter(url => !laminasObtenidas.includes(url));
    if (UrlsSinRepetir.length > 0){
        setDisableButtonAgregar(false)
    }
    else{
        setDisableButtonAgregar(true)
    }
    setDisableButtonAbrir(true);
    for (let i = 60; i > 0; i--) {
        await sleep(1000);
        setSegundosTranscurridos(i);
    }
    
    setDisableButtonAbrir(false);
}

function handleClickAdd(){
    const newUrl = laminas.map(lamina => lamina.url);
    setLaminasObtenidas(prevURLs => [...prevURLs, ...newUrl]); 
    setDisableButtonAgregar(true);
}
  }
  
  export default ObtenerLaminas; // Exporta el componente Album
  