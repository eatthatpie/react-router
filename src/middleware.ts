class MiddlewareContainer {
  constructor(protected _middleware: Array<Function> = []) {}

  public registerMiddleware(cb: Function): void {
    this._middleware.push(cb);
  }

  public run({ from, to }, current = 0): void {
    let next = function() {}
  
    if (current < this._middleware.length - 1) {
      const nextIndex = current + 1;

      next = () => {
        this.run({ from, to }, nextIndex);
      }
    }

    this._middleware[current]({ from, to, next });
  }
}

function createMiddlewareContainer() {
  return new MiddlewareContainer();
}

export { createMiddlewareContainer, MiddlewareContainer };
