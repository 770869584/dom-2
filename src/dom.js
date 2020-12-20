window.dom = {
  find(value) {
    if (value.includes(`>`)) {
      let valueList = value.split(`>`);
      let scope = document.querySelectorAll(valueList[0])[0];
      return scope.querySelectorAll(valueList[1]);
    } else {
      return document.querySelectorAll(value);
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === `string`) {
        return node.style[name];
      } else if (name instanceof Object) {
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};
