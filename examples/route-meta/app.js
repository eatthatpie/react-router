import {
  createRouter,
  RouterProvider,
  RouterView,
  RouterLink,
  useRouteWatcher
} from 'best-react-router';
import { Page1, Page2 } from './pages';
import React from 'react';
import { render } from 'react-dom';

function Layout() {
  useRouteWatcher((from, to) => {
    if (document && to.meta) {
      document.title = to.meta.title
    }
  });

  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <RouterLink to={{ path: '/route-meta/example' }}>
              Page 1
            </RouterLink>
          </li>
          <li>
            <RouterLink to={{ path: '/route-meta/example/page2' }}>
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
  routes: [
    {
      path: '/route-meta/example',
      component: () => Page1,
      meta: {
        title: 'Page 1'
      }
    },
    {
      path: '/route-meta/example/page2',
      component: () => Page2,
      meta: {
        title: 'Page 2'
      }
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
