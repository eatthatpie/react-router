import {
  createRouter,
  RouterContext,
  RouterView,
  RouterLink
} from '@eatthatpie/react-router';
import { Page1, Page2 } from './pages';
import React from 'react';
import { render } from 'react-dom';

function Layout() {
  return (
    <div className="app">
      <nav>
        <ul>
        <li>
            <RouterLink to={{ path: '/' }}>
              Page 1
            </RouterLink>
          </li>
          <li>
            <RouterLink to={{ path: '/page2' }}>
              Page 2
            </RouterLink>
          </li>
        </ul>
      </nav>
      <RouterView />
    </div>
  );
}

const router = createRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Page1
    },
    {
      path: '/page2',
      component: Page2
    }
  ]
});

function App() {
  return (
    <RouterContext.Provider value={router}>
      <Layout />
    </RouterContext.Provider>
  );
}

render(
  <App />,
  document.getElementById('root')
);