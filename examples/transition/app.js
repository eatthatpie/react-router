import {
  createRouter,
  RouterProvider,
  RouterView,
  RouterLink
} from 'best-react-router';
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
      <RouterView transition={{
        duration: 0.4,
        style: {
          enterActive: {},
          enter: {
            opacity: 0
          },
          enterTo: {
            opacity: 1
          },
          leaveActive: {},
          leave: {
            opacity: 1
          },
          leaveTo: {
            opacity: 0
          }
        }
      }} />
    </div>
  );
}

const router = createRouter({
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
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

render(
  <App />,
  document.getElementById('root')
);
