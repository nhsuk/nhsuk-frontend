/**
 * Initialise table component
 *
 * @deprecated Use {@link createAll | `createAll(Table)`} instead.
 * @param {InitOptions} [options]
 */
export function initTables(options?: InitOptions): void;
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
            statusMessage: {
                type: "string";
            };
            ascendingText: {
                type: "string";
            };
            descendingText: {
                type: "string";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<TableConfig>} [config] - Sortable table config
     */
    constructor($root: Element | null, config?: Partial<TableConfig>);
    $upArrow: string;
    $downArrow: string;
    $upDownArrow: string;
    $head: HTMLTableSectionElement;
    $body: HTMLTableSectionElement;
    $caption: HTMLTableCaptionElement | null;
    $headings: HTMLTableCellElement[];
    createHeadingButtons(): void;
    /**
     * @param {HTMLTableCellElement} $heading
     */
    createHeadingButton($heading: HTMLTableCellElement): void;
    createStatusBox(): void;
    $status: HTMLDivElement | undefined;
    initialiseSortedColumn(): void;
    /**
     * @param {MouseEvent} event - Click event
     */
    onSortButtonClick(event: MouseEvent): void;
    updateCaption(): void;
    /**
     * @param {HTMLButtonElement} $button
     * @param {string} direction
     */
    updateButtonState($button: HTMLButtonElement, direction: string): void;
    updateDirectionIndicators(): void;
    removeButtonStates(): void;
    /**
     * @param {HTMLTableRowElement[]} $rows
     */
    addRows($rows: HTMLTableRowElement[]): void;
    getTableRowsArray(): HTMLTableRowElement[];
    /**
     * @param {HTMLTableRowElement[]} $rows
     * @param {number} columnNumber
     * @param {string} sortDirection
     */
    sort($rows: HTMLTableRowElement[], columnNumber: number, sortDirection: string): HTMLTableRowElement[];
    /**
     * @param {HTMLElement} $cell
     */
    getCellValue($cell: HTMLElement): string | number;
}
/**
 * Table config
 */
export type TableConfig = {
    /**
     * - Status message
     */
    statusMessage?: string | undefined;
    /**
     * - Ascending text
     */
    ascendingText?: string | undefined;
    /**
     * - Descending text
     */
    descendingText?: string | undefined;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
//# sourceMappingURL=table.d.mts.map