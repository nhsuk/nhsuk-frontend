/**
 * Initialise file upload component
 *
 * @deprecated Use {@link createAll | `createAll(FileUpload, options)`} instead.
 * @param {InitOptions & Partial<FileUploadConfig>} [options]
 */
export function initFileUploads(options?: InitOptions & Partial<FileUploadConfig>): void;
/**
 * File upload component
 *
 * @augments {ConfigurableComponent<FileUploadConfig>}
 */
export class FileUpload extends ConfigurableComponent<FileUploadConfig, HTMLElement> {
    /**
     * File upload default config
     *
     * @see {@link FileUploadConfig}
     * @constant
     * @type {FileUploadConfig}
     */
    static defaults: FileUploadConfig;
    /**
     * File upload config schema
     *
     * @constant
     * @satisfies {Schema<FileUploadConfig>}
     */
    static schema: Readonly<{
        properties: {
            dropZoneClass: {
                type: "string";
            };
            dropButtonClass: {
                type: "string";
            };
            dropButtonGroupClass: {
                type: "string";
            };
            dropInstructionClass: {
                type: "string";
            };
            chooseFilesButtonClass: {
                type: "string";
            };
            chooseFilesButtonClassList: {
                type: "array";
            };
            announcementsClass: {
                type: "string";
            };
            statusClass: {
                type: "string";
            };
            i18n: {
                type: "object";
            };
        };
    }>;
    /**
     * @param {Element | null} $root - File input element
     * @param {Partial<FileUploadConfig>} [config] - File Upload config
     */
    constructor($root: Element | null, config?: Partial<FileUploadConfig>);
    /**
     * @type {boolean | undefined}
     */
    enteredAnotherElement: boolean | undefined;
    $input: HTMLInputElement;
    id: string;
    i18n: I18n;
    $dropZone: HTMLElement;
    $dropButton: HTMLButtonElement;
    $status: HTMLSpanElement;
    $announcements: HTMLSpanElement;
    /**
     * Updates the visibility of the dropzone as users enters the various elements on the page
     *
     * @param {DragEvent} event - The `dragenter` event
     */
    updateDropzoneVisibility(event: DragEvent): void;
    /**
     * Show the drop zone visually
     */
    showDraggingState(): void;
    /**
     * Hides the drop zone visually
     */
    hideDraggingState(): void;
    /**
     * Handles user dropping on the component
     *
     * @param {DragEvent} event - The `dragenter` event
     */
    onDrop(event: DragEvent): void;
    /**
     * Confirms if enhanced `<input>` can be filled with files from the given `DataTransfer`
     *
     * @param {DataTransfer} dataTransfer - The `DataTransfer` being dropped
     * @returns {boolean} Whether the `DataTransfer` contains files, in number matching the `multiple` attribute of the original `<input>`
     */
    canFillInput(dataTransfer: DataTransfer): boolean;
    /**
     * Confirms if the content of a `DataTransfer` dragged over component can be dropped
     *
     * Unfortunately, there's a certain level of uncertainty in Safari which does not
     * even provide a list of `items` while dragging (and seems to even miss the `types` sometimes)
     *
     * @param {DataTransfer} dataTransfer - The `DataTransfer` being dragged
     * @returns {boolean} Whether the `DataTransfer` looks OK for filling the input, false otherwise
     */
    canDrop(dataTransfer: DataTransfer): boolean;
    /**
     * Confirms the given number of files matches that allowed by the enhanced `<input>`
     *
     * @param {number} numberOfFiles - The number of files
     * @returns {boolean} Whether the enhanced `<input>` can accept that number of files
     */
    matchesInputCapacity(numberOfFiles: number): boolean;
    /**
     * Check if the value of the underlying input has changed
     */
    onChange(): void;
    /**
     * Formats the message shown to users according to files chosen
     *
     * @param {number} fileCount - The number of files chosen
     * @returns {string} Status message
     */
    formatStatusMessage(fileCount: number): string;
    /**
     * Looks up the `<label>` element associated to the field
     *
     * @returns {HTMLElement} The `<label>` element associated to the field
     * @throws {ElementError} If the `<label>` cannot be found
     */
    findLabel(): HTMLElement;
    /**
     * When the button is clicked, emulate clicking the actual, hidden file input
     */
    onClick(): void;
    /**
     * Create a mutation observer to check if the input's attributes altered.
     */
    observeDisabledState(): void;
    /**
     * Synchronise the `disabled` state between the input and replacement button.
     */
    updateDisabledState(): void;
}
/**
 * File upload config
 */
export type FileUploadConfig = {
    /**
     * - Drop zone class
     */
    dropZoneClass: string;
    /**
     * - Drop button class
     */
    dropButtonClass: string;
    /**
     * - Drop button group class
     */
    dropButtonGroupClass: string;
    /**
     * - Drop instruction class
     */
    dropInstructionClass: string;
    /**
     * - Choose files button class
     */
    chooseFilesButtonClass: string;
    /**
     * - Choose files button modifier classes
     */
    chooseFilesButtonClassList: string[];
    /**
     * - Announcements class
     */
    announcementsClass: string;
    /**
     * - Status class
     */
    statusClass: string;
    /**
     * - File upload translations
     */
    i18n?: FileUploadTranslations | undefined;
};
/**
 * Messages used by the component
 */
export type FileUploadTranslations = {
    /**
     * - The text of the button that opens the file picker
     */
    chooseFilesButton?: string | undefined;
    /**
     * - The text informing users they can drop files
     */
    dropInstruction?: string | undefined;
    /**
     * - The text displayed when multiple files
     * have been chosen by the user
     */
    multipleFilesChosen?: TranslationPluralForms | undefined;
    /**
     * - The text to displayed when no file has been chosen by the user
     */
    noFileChosen?: string | undefined;
    /**
     * - The text announced by assistive technology
     * when user drags files and enters the drop zone
     */
    enteredDropZone?: string | undefined;
    /**
     * - The text announced by assistive technology
     * when user drags files and leaves the drop zone without dropping
     */
    leftDropZone?: string | undefined;
};
import type { InitOptions } from '../../index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { I18n } from '../../i18n.mjs';
import type { TranslationPluralForms } from '../../i18n.mjs';
//# sourceMappingURL=file-upload.d.mts.map