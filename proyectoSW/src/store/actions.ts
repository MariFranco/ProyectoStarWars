import { ILamina, INave, INaveAlbum, IPelicula, IPeliculaAlbum, IPersonaje, IPersonajeAlbum } from "../types";

export interface Action {
    type: string;
    payload: ILamina[] | IPelicula[] | INave[] | IPersonaje[] | IPeliculaAlbum[] | IPersonajeAlbum[] | INaveAlbum
  }

export enum ACTION_TYPE {
    SAVE_FILMS =  'SAVE_FILMS',
    SAVE_CHARACTERS=  'SAVE_CHARACTERS',
    SAVE_STARSHIPS = 'SAVE_STARSHIPS',
    SAVE_ALBUM = 'SAVE_ALBUM',
    SAVE_PERSONAJESALBUM = 'SAVE_PERSONAJESALBUM',
    SAVE_PELICULASALMBUM = 'SAVE_PELICULASALBUM',
    SAVE_NAVESALBUM = 'SAVE_NAVESALBUM'
}

export const saveFilms = (payload: IPelicula[]): Action => ({
   type: ACTION_TYPE.SAVE_FILMS,
   payload 
})

export const saveCharacters = (payload: IPersonaje[]): Action => ({
    type: ACTION_TYPE.SAVE_CHARACTERS,
    payload 
 })
 export const saveStarships = (payload: INave[]): Action => ({
    type: ACTION_TYPE.SAVE_STARSHIPS,
    payload 
 })
 export const saveAlbum = (payload: ILamina[]): Action => ({
   type: ACTION_TYPE.SAVE_ALBUM,
   payload
 })
 export const savePeliculasAlbum = (payload: IPeliculaAlbum[]): Action => ({
   type: ACTION_TYPE.SAVE_PELICULASALMBUM,
   payload
 })
 export const savePersonajesAlbum = (payload: IPersonajeAlbum[]): Action => ({
   type: ACTION_TYPE.SAVE_PERSONAJESALBUM,
   payload
 })
 export const saveNavesAlbum = (payload: INaveAlbum[]): Action => ({
   type: ACTION_TYPE.SAVE_NAVESALBUM,
   payload
 })
