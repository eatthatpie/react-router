import { createContext } from 'react';
import React from 'react';

const RouterContext = createContext(null);

function RouterProvider(props) {
  const { children, router } = props;

  return (
    <RouterContext.Provider value={router}>
      {children}
    </RouterContext.Provider>
  )
}

export { RouterContext, RouterProvider };
