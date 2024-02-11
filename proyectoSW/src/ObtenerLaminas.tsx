import { useEffect, useState } from "react";
import { INave, IPelicula, IPersonaje } from "./types";
import { useOutletContext } from "react-router-dom";
import { MyAppState } from "./store/reducer";
import { saveCharacters, saveFilms, saveStarships } from "./store/actions";

{/*Esta es la pagina que me muestra las cartas para obtener lamina*/}
function ObtenerLaminas() {
    const [appState, dispatch] = useOutletContext<[MyAppState, Function]>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        {/*me traigo todo del API, lo convierto en JSON y lo pego al context*/}
        const fetchData = async () => {
            const responsePersonaje = await fetch('https://swapi.dev/api/people/');
            const responseJsonPersonaje: IPersonaje[]  = await responsePersonaje.json();
            dispatch(saveCharacters(responseJsonPersonaje))

            const responsePelicula = await fetch('https://swapi.dev/api/films/');
            const responseJsonPelicula: IPelicula[]  = await responsePelicula.json();
            dispatch(saveFilms(responseJsonPelicula))

            const responseNave = await fetch('https://swapi.dev/api/starships/');
            const responseJsonNave: INave[]  = await responseNave.json();
            dispatch(saveStarships(responseJsonNave))
            setLoading(false)
        }
        fetchData();
    }, [])
    console.log(appState)
    // ternario
    // if (condition) {actionTrue} else {actionFalse}
    // condition ? actionTrue : actionFalse
    return loading ? <h1>Cargando...</h1>:(
      <div>
        <h2>Obtener Láminas</h2>
        <table>
          {/* Aquí puedes agregar las filas y columnas de tu tabla */}
          <thead>
            <tr>
              <th>Columna 1</th>
              <th>Columna 2</th>
              {/* Agregar más columnas según sea necesario */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dato 1</td>
              <td>Dato 2</td>
              {/* Agregar más datos según sea necesario */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ObtenerLaminas; // Exporta el componente Album
  