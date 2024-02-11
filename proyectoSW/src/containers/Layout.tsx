import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';
import { useReducer } from 'react';
import { initialState, myAppReducer } from '../store/reducer';

// const store = {
//   state1: '',
//   state2: '',
// }

// dispatch({ name: 'guardar_datos', payload: {}})

// if (action.name === 'guardar_datos'){
//   store = {
//     ...store,
//     state1: action.payload
//   }
// }

export const Layout = () => {
const [appState, dispatch] = useReducer( myAppReducer, initialState);

  return (
    <div>
        <Sidebar  />
        {/*para que todas las rutas tengan acceso al context se pone en el outlet*/}
        <Outlet context={[appState, dispatch]}/>
    </div>
  );
};

