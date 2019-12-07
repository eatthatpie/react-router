import React from 'react';
import { render } from 'react-dom';

function App({ children }) {
  return (
    <div className="app">
      {children}
    </div>
  )
}

render(
  <App>
    Example.
  </App>,
  document.getElementById('root')
);
