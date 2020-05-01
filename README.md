# Lightweight router for React

## Instalation

```sh
npm i -s best-react-router
```

## Quick start

`app.js`:
```js
import React from 'react';
import Layout from './layout';
import { render } from 'react-dom';
import { createRouter, RouterProvider } from 'best-react-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./Home')
    },
    {
      path: '/me/about',
      component: () => import('./About')
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
```

`layout.js`:
```js
import React from 'react';
import { RouterView, RouterLink } from 'best-react-router';

function Layout() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <RouterLink to={{ path: '/' }}>
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to={{ path: '/me/about' }}>
              Cool stuff about me
            </RouterLink>
          </li>
        </ul>
      </nav>
      <RouterView />
    </div>
  );
}

export default Layout;
```

## Examples

- [Basic example](https://github.com/eatthatpie/react-router/tree/master/examples/history-mode)
- [Route params](https://github.com/eatthatpie/react-router/tree/master/examples/route-params)
- [Transition](https://github.com/eatthatpie/react-router/tree/master/examples/transition)
- [Middleware](https://github.com/eatthatpie/react-router/tree/master/examples/middleware)
- [Route watcher & meta data](https://github.com/eatthatpie/react-router/tree/master/examples/route-meta)

## Tests

Running e2e tests:

```sh
npm run examples && npm run test:e2e
```

At them moment available for `Chrome` and `Firefox` webdrivers.

## License

The code is under MIT license.
