import { ILamina, INave, IPelicula, IPersonaje } from "../types";

export interface Action {
    type: string;
    payload: ILamina[] | IPelicula[] | INave[] | IPersonaje[]
  }

export enum ACTION_TYPE {
    SAVE_FILMS =  'SAVE_FILMS',
    SAVE_CHARACTERS=  'SAVE_CHARACTERS',
    SAVE_STARSHIPS = 'SAVE_STARSHIPS',
    SAVE_ALBUM = 'SAVE_ALBUM',
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
