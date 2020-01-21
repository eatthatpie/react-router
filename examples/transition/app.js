import {
  createRouter,
  RouterContext,
  RouterView,
  RouterLink,
  Transition
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
            <RouterLink to={{ path: '/transition/example' }}>
              Page 1
            </RouterLink>
          </li>
          <li>
            <RouterLink to={{ path: '/transition/example/page2' }}>
              Page 2
            </RouterLink>
          </li>
        </ul>
      </nav>
      <Transition name="fade" duration={2000}>
        <RouterView />
      </Transition>
    </div>
  );
}

const router = createRouter({
  mode: 'history',
  routes: [
    {
      path: '/transition/example',
      component: () => Page1
    },
    {
      path: '/transition/example/page2',
      component: () => Page2
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
