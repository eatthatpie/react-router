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

## Links

```js
const router = createRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => ...
    },
    {
      name: 'about',
      path: '/about',
      component: () => ...
    }
  ]
});
```
```js
function Page() {
  return (
    <>
      <RouterLink to={{ path: '/' }}>
        Home
      </RouterLink>
      <RouterLink to={{ path: '/about' }}>
        About
      </RouterLink>
    </>
  );
}
```
```js
function Page() {
  return (
    <>
      <RouterLink to={{ name: 'home' }}>
        Home
      </RouterLink>
      <RouterLink to={{ name: 'about' }}>
        About
      </RouterLink>
    </>
  );
}
```

## Route params

```js
const router = createRouter({
  routes: [
    {
      path: '/page/:slug',
      component: () => Page
    }
  }
});
```
```js
import { useCurrentRoute } from 'best-react-router'

export function Page() {
  const route = useCurrentRoute();

  return (
    <div className="page-2">
      <h1>
        This is Page with slug {route.params.slug}.
      </h1>
    </div>
  );
}
```

## Transition

```js
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
```

## Route meta and route watcher

The `meta` property of the route configuration can have a custom value.

```js
const router = createRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => Page,
      meta: {
        title: 'Page 1'
      }
    }
  ]
})
```
```js
import { useRouteWatcher } from 'best-react-router'

function Page() {
  useRouteWatcher((from, to) => {
    if (document && to.meta) {
      document.title = to.meta.title
    }
  })

  ...
}
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

Drivers included in e2e tests:
- chrome
- firefox

## License

The code is under MIT license.
