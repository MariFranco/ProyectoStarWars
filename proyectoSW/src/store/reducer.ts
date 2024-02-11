import React from "react";
import { INave, IPelicula, IPersonaje } from "../types";
import { Action, ACTION_TYPE } from "./actions";

export interface MyAppState {
    peliculas: IPelicula[] | undefined;
    naves: INave[] | undefined;
    personajes: IPersonaje[] | undefined;
}

{/* inicialmente no tenemos nada*/}
export const initialState: MyAppState = {
    peliculas: undefined,
    naves: undefined,
    personajes: undefined
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
        default:
            throw new Error('Action not supported');
    }
}