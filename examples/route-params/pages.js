import React from 'react';
import { useCurrentRoute } from '@eatthatpie/react-router';

export function Page1() {
  return (
    <div className="page-1">
      <h1>
        This is Page 1.
      </h1>
    </div>
  );
}

export function Page2() {
  const route = useCurrentRoute();

  return (
    <div className="page-2">
      <h1>
        This is Page 2 with param a = {route.params.a}.
      </h1>
    </div>
  );
}

export function Page3() {
  const route = useCurrentRoute();

  return (
    <div className="page-3">
      <h1>
        This is Page 3 with param a = {route.params.a} and param b = {route.params.b}.
      </h1>
    </div>
  );
}
