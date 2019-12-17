export function stringify(obj: any, replacer?, spaces?, cycleReplacer?): string {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
}

function serializer(replacer, cycleReplacer) {
  const stack = [];
  const keys = [];

  if (cycleReplacer == null) {
    cycleReplacer = (key, value) => {
      if (stack[0] === value) {
        return '[Circular ~]';
      }
      return `[Circular ~.${keys.slice(0, stack.indexOf(value)).join(".")}]`;
    };
  }

  return function(key, value) {
    if (stack.length > 0) {
      const thisPos = stack.indexOf(this);
      // tslint:disable-next-line:no-bitwise
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      // tslint:disable-next-line:no-bitwise
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      // tslint:disable-next-line:no-bitwise
      if (~stack.indexOf(value)) {
        value = cycleReplacer.call(this, key, value);
      }
    } else {
      stack.push(value);
    }

    return replacer == null ? value : replacer.call(this, key, value);
  };
}
