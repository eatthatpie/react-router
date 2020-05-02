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
            <RouterLink to={{ path: '/middleware/example' }}>
              Page 1
            </RouterLink>
          </li>
          <li>
            <RouterLink to={{ path: '/middleware/example/page2' }}>
              Page 2
            </RouterLink>
          </li>
          <li>
            <RouterLink to={{ path: '/middleware/example/page3' }}>
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
      path: '/middleware/example',
      component: () => Page1
    },
    {
      path: '/middleware/example/page2',
      component: () => Page2
    },
    {
      path: '/middleware/example/page3',
      component: () => Page3
    }
  ]
});

router.middleware().registerMiddleware(({ to, next }) => {
  if (to.matchedPath === '/middleware/example/page3') {
    alert('You don`t have access to this page.');
  } else {
    return next();
  }
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
