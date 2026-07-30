/**
 * Normalise options passed to `initAll` or `createAll`
 *
 * @template {CompatibleClass} ComponentClass
 * @param {Config | CreateAllOptions<ComponentClass> | OnErrorCallback<ComponentClass> | Element | Document | null} [scopeOrOptions] - Scope of the document to search within, initialisation options or error callback function
 * @returns {CreateAllOptions<ComponentClass>} Normalised options
 */
export function normaliseOptions<ComponentClass extends CompatibleClass>(scopeOrOptions?: Config | CreateAllOptions<ComponentClass> | OnErrorCallback<ComponentClass> | Element | Document | null): CreateAllOptions<ComponentClass>;
import type { CompatibleClass } from '../../component.mjs';
import type { Config } from '../../index.mjs';
import type { CreateAllOptions } from '../../index.mjs';
import type { OnErrorCallback } from '../../index.mjs';
//# sourceMappingURL=normalise-options.d.mts.map