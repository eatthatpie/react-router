import {
  createRouter,
  RouterProvider,
  RouterView,
  RouterLink
} from 'best-react-router';
import { Page1, Page2, Page3 } from './pages';
import React from 'react';
import { render } from 'react-dom';

function Layout() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <RouterLink to={{ path: '/route-params/example' }}>
              Page 1
            </RouterLink>
          </li>
          <li>
            <RouterLink to={{ path: '/route-params/example/1' }}>
              Page 2
            </RouterLink>
          </li>
          <li>
            <RouterLink to={{ path: '/route-params/example/2/3' }}>
              Page 3
            </RouterLink>
          </li>
        </ul>
      </nav>
      <RouterView />
    </div>
  );
}

const router = createRouter({
  routes: [
    {
      path: '/route-params/example',
      component: () => Page1
    },
    {
      path: '/route-params/example/:a',
      component: () => Page2
    },
    {
      path: '/route-params/example/:a/:b',
      component: () => Page3
    }
  ]
});

function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

render(
  <App />,
  document.getElementById('root')
);
