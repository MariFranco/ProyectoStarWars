import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';


export const Layout = () => {
//   const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <Sidebar  />
        <Outlet/>
    </div>
  );
};

