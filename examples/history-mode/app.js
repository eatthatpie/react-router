import {
  createRouter,
  RouterContext,
  RouterView,
  RouterLink
} from '@eatthatpie/react-router';
import { Page1, Page2 } from './pages';
import React from 'react';
import { render } from 'react-dom';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
        <li>
            <RouterLink to="/">
              Page 1
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/page2">
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

render(
  <RouterContext router={router}>
    <App />
  </RouterContext>,
  document.getElementById('root')
);
