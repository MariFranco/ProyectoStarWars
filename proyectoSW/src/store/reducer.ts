import React from "react";
import { ILamina, INave, INaveAlbum, IPelicula, IPeliculaAlbum, IPersonaje, IPersonajeAlbum } from "../types";
import { Action, ACTION_TYPE } from "./actions";

export interface MyAppState {
    peliculas: IPelicula[] | undefined;
    naves: INave[] | undefined;
    personajes: IPersonaje[] | undefined;
    album: ILamina[];
    personajesAlbum : IPersonajeAlbum[];
    peliculasAlbum: IPeliculaAlbum[];
    navesAlbum: INaveAlbum[];
}

{/* inicialmente no tenemos nada*/}
export const initialState: MyAppState = {
    peliculas: undefined,
    naves: undefined,
    personajes: undefined,
    album: [],
    personajesAlbum: [],
    peliculasAlbum: [],
    navesAlbum: [],
}

export const myAppReducer: React.Reducer<MyAppState,  Action> = (prevState, action) => {
    // esto ta malo: prevState.peliculas = {} X X X
    switch(action.type){
        case ACTION_TYPE.SAVE_FILMS: {
            return {
              ...prevState,
              peliculas: action.payload as IPelicula[]
            };
        }
        case ACTION_TYPE.SAVE_CHARACTERS: {
            return {
            ...prevState,
            personajes: action.payload as IPersonaje[]
            };
        }
        case ACTION_TYPE.SAVE_STARSHIPS: {
            return {
            ...prevState,
            naves: action.payload as INave[]
            };
        }
        case  ACTION_TYPE.SAVE_ALBUM: {
            return{
                ...prevState,
                album: action.payload as ILamina[]
            }
        }
        case  ACTION_TYPE.SAVE_PELICULASALMBUM: {
            return{
                ...prevState,
                peliculasAlbum: action.payload as IPeliculaAlbum[]
            }
        }
        case  ACTION_TYPE.SAVE_PERSONAJESALBUM: {
            return{
                ...prevState,
                personajesAlbum: action.payload as IPersonajeAlbum[]
            }
        }
        case  ACTION_TYPE.SAVE_NAVESALBUM: {
            return{
                ...prevState,
                navesAlbum: action.payload as INaveAlbum[]
            }
        }
        default:
            throw new Error('Action not supported');
    }
}
