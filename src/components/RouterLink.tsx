import React, { useContext } from 'react';
import RouterContext from '@/RouterContext';

export default function RouterLink(props) {
  const $router = useContext(RouterContext);

  if (!$router) {
    throw new Error(
      `[RouterLink] No RouterContext provided.`
    );
  }

  function handleClick() {
    $router.push({ path: props.to.path });
  }

  return (
    <a onClick={handleClick}>
      {props.children}
    </a>
  );
}
