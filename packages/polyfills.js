/**
 * IE polyfill for NodeList.forEach()
*/
if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/**
 * IE polyfill for Array.includes()
*/
if (!Array.prototype.includes) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, 'includes', {
    enumerable: false,
    value(obj) {
      return this.filter((el) => el === obj).length > 0;
    },
  });
}
