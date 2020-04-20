/**
 * IE polyfill for NodeList.forEach()
*/
if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
