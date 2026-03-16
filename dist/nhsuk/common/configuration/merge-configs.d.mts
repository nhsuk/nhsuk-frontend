/**
 * Config merging function
 *
 * Takes any number of objects and combines them together, with
 * greatest priority on the LAST item passed in.
 *
 * @param {...{ [key: string]: unknown }} configObjects - Config objects to merge
 * @returns A merged config object
 */
export function mergeConfigs(...configObjects: {
    [key: string]: unknown;
}[]): {
    [key: string]: unknown;
};
//# sourceMappingURL=merge-configs.d.mts.map