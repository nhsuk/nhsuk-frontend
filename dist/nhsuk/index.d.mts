/**
 * Use this function to initialise nhsuk-frontend components within a
 * given scope. This function is called by default with the document
 * element, but you can call it again later with a new DOM element
 * containing nhsuk-frontend components which you wish to initialise.
 *
 * @param {Element | Document | null} [$scope] - Scope of the document to search within
 */
export function initAll($scope?: Element | Document | null): void;
export * from "./components/index.mjs";
export * from "./component.mjs";
export { isSupported, version } from "./common/index.mjs";
//# sourceMappingURL=index.d.mts.map