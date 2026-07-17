/**
 * Initialise table component
 *
 * @deprecated Use {@link createAll | `createAll(Table, options)`} instead.
 * @param {InitOptions & Partial<TableConfig>} [options]
 */
export function initTables(options?: InitOptions & Partial<TableConfig>): void;
/**
 * Table component
 *
 * @augments {ConfigurableComponent<TableConfig>}
 */
export class Table extends ConfigurableComponent<TableConfig, HTMLElement> {
    /**
     * Sortable table config
     *
     * @see {@link TableConfig}
     * @constant
     * @type {TableConfig}
     */
    static defaults: TableConfig;
    /**
     * Sortable table config schema
     *
     * @constant
     * @satisfies {Schema<TableConfig>}
     */
    static schema: Readonly<{
        properties: {
            bodyClass: {
                type: "string";
            };
            captionClass: {
                type: "string";
            };
            cellClass: {
                type: "string";
            };
            headClass: {
                type: "string";
            };
            headerClass: {
                type: "string";
            };
            rowClass: {
                type: "string";
            };
            i18n: {
                type: "object";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<TableConfig>} [config] - Sortable table config
     */
    constructor($root: Element | null, config?: Partial<TableConfig>);
    $head: HTMLTableSectionElement;
    $body: HTMLTableSectionElement;
    $caption: HTMLTableCaptionElement;
    $headers: HTMLTableCellElement[];
    $rows: HTMLElement[];
    i18n: I18n;
    collators: Readonly<{
        string: Intl.Collator;
        number: Intl.Collator;
    }>;
    $screenReaderStatusMessage: HTMLDivElement;
    setup(): void;
    setupButtons(): void;
    /**
     * @param {number} index
     * @param {TableSortDirection} [direction]
     */
    sort(index: number, direction?: TableSortDirection): void;
    /**
     * @param {MouseEvent} event - Click event
     */
    handleSort(event: MouseEvent): void;
    /**
     * @param {number} index
     * @param {TableSortDirection} [direction]
     */
    update(index: number, direction?: TableSortDirection): void;
    /**
     * @param {number} index
     * @param {TableSortDirection} [direction]
     */
    updateScreenReaderStatusMessage(index: number, direction?: TableSortDirection): void;
    /**
     * @param {HTMLTableCellElement | null} [$header]
     */
    getIndex($header?: HTMLTableCellElement | null): number;
    /**
     * @param {HTMLElement | null} [$header]
     * @returns {TableSortDirection}
     */
    getDirection($header?: HTMLElement | null): TableSortDirection;
    /**
     * @param {HTMLElement | null} [$header]
     * @returns {TableSortDirection}
     */
    getDirectionNext($header?: HTMLElement | null): TableSortDirection;
    /**
     * @param {HTMLElement} $cell
     * @returns {[string, boolean]} - Cell value and whether it is numeric
     */
    getValue($cell: HTMLElement): [string, boolean];
}
/**
 * Table config
 */
export type TableConfig = {
    /**
     * - Table body class for `<tbody>` element
     */
    bodyClass: string;
    /**
     * - Table caption class for `<caption>` element
     */
    captionClass: string;
    /**
     * - Table cell class for `<td>` elements
     */
    cellClass: string;
    /**
     * - Table head class for `<thead>` element
     */
    headClass: string;
    /**
     * - Table header class for `<th>` elements
     */
    headerClass: string;
    /**
     * - Table row class for `<tr>` elements
     */
    rowClass: string;
    /**
     * - Table translations
     */
    i18n?: TableTranslations | undefined;
};
/**
 * Table sort direction
 */
export type TableSortDirection = "ascending" | "descending" | "none";
/**
 * Table translations
 */
export type TableTranslations = {
    /**
     * - Status message
     */
    sortAnnouncement?: string | undefined;
    /**
     * - Ascending text
     */
    ascending?: string | undefined;
    /**
     * - Descending text
     */
    descending?: string | undefined;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { I18n } from '../../i18n.mjs';
//# sourceMappingURL=table.d.mts.map