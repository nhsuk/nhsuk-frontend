/**
 * Extracts keys starting with a particular namespace from dataset ('data-*')
 * object, removing the namespace in the process, normalising all values
 *
 * @template {Partial<Record<keyof ConfigurationType, unknown>>} ConfigurationType
 * @param {Schema<ConfigurationType>} schema - The schema of a component
 * @param {DOMStringMap} dataset - The object to extract key-value pairs from
 * @param {keyof ConfigurationType} namespace - The namespace to filter keys with
 * @returns {ObjectNested | undefined} Nested object with dot-separated key namespace removed
 */
export function extractConfigByNamespace<ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>>>(schema: Schema<ConfigurationType>, dataset: DOMStringMap, namespace: keyof ConfigurationType): ObjectNested | undefined;
/**
 * Schema for component config
 */
export type Schema<ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>>> = {
    /**
     * - Schema properties
     */
    properties: Record<keyof ConfigurationType, SchemaProperty | undefined>;
    /**
     * - List of schema conditions
     */
    anyOf?: SchemaCondition<ConfigurationType>[] | undefined;
};
/**
 * Schema property for component config
 */
export type SchemaProperty = {
    /**
     * - Property type
     */
    type: "string" | "boolean" | "number" | "object";
};
/**
 * Schema condition for component config
 */
export type SchemaCondition<ConfigurationType extends Partial<Record<keyof ConfigurationType, unknown>>> = {
    /**
     * - List of required config fields
     */
    required: (keyof ConfigurationType)[];
    /**
     * - Error message when required config fields not provided
     */
    errorMessage: string;
};
export type NestedKey = keyof ObjectNested;
export type ObjectNested = {
    [key: string]: string | boolean | number | ObjectNested | undefined;
};
//# sourceMappingURL=extract-config-by-namespace.d.mts.map