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
    const [disableButton, setDisableButton] = useState(false);
    const [openedChest, setOpenedChests] = useState<Number[]>([]);

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
    }, [])
    // ternario
    // if (condition) {actionTrue} else {actionFalse}
    // condition ? actionTrue : actionFalse
    return loading ? <h1>Cargando...</h1>:(
    <div className="sobresGeneral">
        <h1>Sobres sorpresa</h1>
        <p>Selecciona un sobre para obtener láminas nuevas</p>
        <div className="contenedor-flex">
            {[1,2,3,4].map(id => (
                <div className="sobres" key={"sobre" + id}>
                    <div><img src="../images/sobre.png" width={80}/></div>
                    <button onClick={() => {handleClick(id)}} disabled={disableButton || openedChest.includes(id)}>Abrir</button>
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
                    <button>agregar</button>
                </div>
            ))} 
        </div>
        {/* map de laminas obtenidas: ILmaina[] => renderizas las vueltas*/}
      </div>
    );

function handleClick (id: number) {
    setOpenedChests(prevState => [...prevState, id]);
    setLaminas (getLamina(appState.personajes!, appState.naves!, appState.peliculas!));
    setDisableButton(true);
    (async function() {
        await sleep(5000);
        setDisableButton(false);
    })()
}
  }
  
  export default ObtenerLaminas; // Exporta el componente Album
  