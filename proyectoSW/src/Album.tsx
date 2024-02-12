import { useState } from "react";
import { INaveAlbum, IPeliculaAlbum, IPersonajeAlbum } from "./types";
import "./Album.css";
import { useOutletContext } from "react-router-dom";
import { MyAppState } from "./store/reducer";

{/*PAGINA DE MI ALBUM*/}



function Album() {
  const [appState] = useOutletContext<[MyAppState, Function]>();
  //const [peliculasAlbum] = useState <IPeliculaAlbum[]> ([]);
  const [mostrarPeliculas, setMostrarPeliculas] = useState(false);
  //const [personajesAlbum] = useState <IPersonajeAlbum[]> ([]);
  const [mostrarPersonajes, setMostrarPersonajes] = useState(false);
  //const [navesAlbum] = useState <INaveAlbum[]> ([]);
  const [mostrarNaves, setMostrarNaves] = useState(false);
  
  

  return (
    <>
    <div className="botonShow">
      <h1>Mi Album</h1>
      <p>Aqui puedes ver tu album con las láminas coleccionadas</p>
      <button onClick={handleClickFilm}>Peliculas</button>
      <button onClick={handleClickChar}>Personajes</button>
      <button onClick={handleClickShip}>Naves</button>
    </div>
    <div className='showItems'>
        {mostrarPeliculas && appState.peliculasAlbum.map(film => (
                <div className="info-laminaAlbum">                 
                    <h2>{film.title}</h2>
                    <br />
                    <p>Lámina # {film.url.split('/').filter(Boolean).pop()}</p>
                    <br />  
                </div>
            ))} 

        {mostrarPersonajes && appState.personajesAlbum.map(character => (
                <div className="info-laminaAlbum">                 
                    <h2>{character.name}</h2>
                    <br />
                    <p>Lámina # {character.url.split('/').filter(Boolean).pop()}</p>
                    <br />  
                </div>
            ))}

        {mostrarNaves && appState.navesAlbum.map(starship => (
                <div className="info-laminaAlbum">                 
                    <h2>{starship.name}</h2>
                    <br />
                    <p>Lámina # {starship.url.split('/').filter(Boolean).pop()}</p>
                    <br />  
                </div>
            ))}
        </div>
        </>
  );
  
  function handleClickFilm(){
    setMostrarPeliculas(true);
    setMostrarPersonajes(false);
    setMostrarNaves(false);
  }
  function handleClickChar(){
    setMostrarPersonajes(true);
    setMostrarPeliculas(false);
    setMostrarNaves(false);
  }
  function handleClickShip(){
    setMostrarNaves(true);
    setMostrarPeliculas(false);
    setMostrarPersonajes(false);
  }
}

export default Album; // Exporta el componente Album


