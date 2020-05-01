class MiddlewareContainer {
  constructor(
    protected _middlewareBefore: Array<Function> = [],
    protected _middlewareAfter: Array<Function> = []
  ) {}

  public registerMiddlewareBefore(cb: Function): void {
    this._middlewareBefore.push(cb);
  }

  public registerMiddlewareAfter(cb: Function): void {
    this._middlewareAfter.push(cb);
  }

  public registerMiddleware(cb: Function): void {
    this.registerMiddlewareBefore(cb);
  }

  public run({ from, to, type }, current = 0): void {
    const middleware: Array<Function> = this._middlewareBefore.concat(
      this._middlewareAfter
    );
  
    if (middleware.length <= 0) {
      return;
    }

    const isLast = current >= middleware.length - 1;
    let next = function() {}
  
    if (!isLast) {
      const nextIndex = current + 1;

      next = () => {
        this.run({ from, to, type }, nextIndex);
      }
    }

    middleware[current]({ from, to, type, next });

    return;
  }
}

function createMiddlewareContainer() {
  return new MiddlewareContainer();
}

export { createMiddlewareContainer, MiddlewareContainer };
