import {useRoutes } from 'react-router-dom';

import Dashboard from "./scenes/kwestinputform";

export default function Router() {
  const routes=  useRoutes([
    {
      path: "/", 
      element: <Dashboard />,
    },
    {
      path: '*', element: <Dashboard />,
    },
    
   
  ]);

  return routes;}