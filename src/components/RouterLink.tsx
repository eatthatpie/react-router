import React, { useContext } from 'react';
import { RouterContext } from '@/RouterContext';

export default function RouterLink(props) {
  const $router: any = useContext(RouterContext);

  if (!$router) {
    throw new Error(
      `[RouterLink] No RouterContext provided.`
    );
  }

  function handleClick(e) {
    e.preventDefault();

    $router.push({ path: props.to.path });
  }

  return (
    <a
      href={props.to.path}
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
}
