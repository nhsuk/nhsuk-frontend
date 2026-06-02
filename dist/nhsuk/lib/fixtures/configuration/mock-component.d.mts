export class MockComponent extends Component<HTMLElement> {
    /**
     * @param {Element | null} $root - HTML element to use for component
     */
    constructor($root: Element | null);
    args: (Element | null)[];
}
export class MockComponentError extends MockComponent {
}
/**
 * @augments {ConfigurableComponent<MockConfig>}
 */
export class MockConfigurableComponent extends ConfigurableComponent<MockConfig, HTMLElement> {
    /**
     * @satisfies {Schema<MockConfig>}
     */
    static schema: {
        properties: {
            aNumber: {
                type: "number";
            };
            aDecimalNumber: {
                type: "number";
            };
            aBoolean: {
                type: "boolean";
            };
            aString: {
                type: "string";
            };
            aStringBoolean: {
                type: "string";
            };
            aStringNumber: {
                type: "string";
            };
            anOptionalString: {
                type: "string";
            };
            anObject: {
                type: "object";
            };
            anArray1: {
                type: "array";
            };
            anArray2: {
                type: "array";
            };
            anArray3: {
                type: "array";
            };
            anArray4: {
                type: "array";
            };
        };
    };
    /**
     * @satisfies {MockConfig}
     */
    static defaults: {
        aNumber: number;
        aDecimalNumber: number;
        aBoolean: false;
        aString: string;
        aStringBoolean: "true";
        aStringNumber: string;
        anObject: {
            one: string;
            two: string;
            three: string;
        };
        anArray1: never[];
        anArray2: true[];
        anArray3: number[];
        anArray4: string[];
    };
    constructor($root: Element | null, config?: Partial<MockConfig> | undefined);
}
/**
 * @augments {ConfigurableComponent<MockConfigBoolean>}
 */
export class MockConfigurableComponentBoolean extends ConfigurableComponent<MockConfigBoolean, HTMLElement> {
    /**
     * @satisfies {Schema<MockConfigBoolean>}
     */
    static schema: {
        properties: {
            example: {
                type: "boolean";
            };
        };
    };
    /**
     * @satisfies {MockConfigBoolean}
     */
    static defaults: {
        example: false;
    };
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<MockConfigBoolean>} [config] - Component config
     */
    constructor($root: Element | null, config?: Partial<MockConfigBoolean>);
    args: (Element | Partial<MockConfigBoolean> | null | undefined)[];
}
/**
 * @augments {ConfigurableComponent<MockConfigNumber>}
 */
export class MockConfigurableComponentNumber extends ConfigurableComponent<MockConfigNumber, HTMLElement> {
    /**
     * @satisfies {Schema<MockConfigNumber>}
     */
    static schema: {
        properties: {
            example: {
                type: "number";
            };
        };
    };
    /**
     * @satisfies {MockConfigNumber}
     */
    static defaults: {
        example: number;
    };
    /**
     * @param {Element | null} $root - HTML element to use for component
     * @param {Partial<MockConfigNumber>} [config] - Component config
     */
    constructor($root: Element | null, config?: Partial<MockConfigNumber>);
    args: (Element | Partial<MockConfigNumber> | null | undefined)[];
}
export class MockConfigurableComponentNoSchema extends ConfigurableComponent<import("../../../common/configuration/extract-config-by-namespace.mjs").ObjectNested, HTMLElement> {
    static defaults: {
        example: number;
    };
    constructor($root: Element | null, config?: Partial<import("../../../common/configuration/extract-config-by-namespace.mjs").ObjectNested> | undefined);
}
export class MockConfigurableComponentNoDefaults extends ConfigurableComponent<import("../../../common/configuration/extract-config-by-namespace.mjs").ObjectNested, HTMLElement> {
    static schema: {
        properties: {
            example: {
                type: string;
            };
        };
    };
    constructor($root: Element | null, config?: Partial<import("../../../common/configuration/extract-config-by-namespace.mjs").ObjectNested> | undefined);
}
/**
 * @augments {ConfigurableComponent<MockConfigOptional>}
 */
export class MockConfigurableComponentAllOf extends ConfigurableComponent<MockConfigOptional, HTMLElement> {
    /**
     * @satisfies {Schema<MockConfigOptional>}
     */
    static schema: {
        properties: {
            example1: {
                type: "string";
            };
            example2: {
                type: "string";
            };
            example3: {
                type: "number";
            };
            example4: {
                type: "boolean";
            };
        };
        allOf: ({
            required: ("example1" | "example2")[];
            errorMessage: string;
        } | {
            required: "example3"[];
            errorMessage: string;
        } | {
            required: "example4"[];
            errorMessage: string;
        })[];
    };
    /**
     * @satisfies {MockConfigOptional}
     */
    static defaults: {
        example1: string;
        example2: string;
        example3: number;
        example4: false;
    };
    constructor($root: Element | null, config?: Partial<MockConfigOptional> | undefined);
}
/**
 * @augments {ConfigurableComponent<MockConfigOptional>}
 */
export class MockConfigurableComponentAnyOf extends ConfigurableComponent<MockConfigOptional, HTMLElement> {
    /**
     * @satisfies {Schema<MockConfigOptional>}
     */
    static schema: {
        properties: {
            example1: {
                type: "string";
            };
            example2: {
                type: "string";
            };
            example3: {
                type: "number";
            };
            example4: {
                type: "boolean";
            };
        };
        anyOf: ({
            required: ("example1" | "example2")[];
            errorMessage: string;
        } | {
            required: "example3"[];
            errorMessage: string;
        } | {
            required: "example4"[];
            errorMessage: string;
        })[];
    };
    /**
     * @satisfies {MockConfigOptional}
     */
    static defaults: {
        example1: string;
        example2: string;
        example3: number;
        example4: false;
    };
    constructor($root: Element | null, config?: Partial<MockConfigOptional> | undefined);
}
/**
 * @augments {ConfigurableComponent<MockConfigOptional>}
 */
export class MockConfigurableComponentMixed extends ConfigurableComponent<MockConfigOptional, HTMLElement> {
    /**
     * @satisfies {Schema<MockConfigOptional>}
     */
    static schema: {
        properties: {
            example1: {
                type: "string";
            };
            example2: {
                type: "string";
            };
            example3: {
                type: "number";
            };
            example4: {
                type: "boolean";
            };
        };
        anyOf: ({
            required: "example1"[];
            errorMessage: string;
        } | {
            required: "example2"[];
            errorMessage: string;
        })[];
        allOf: ({
            required: "example3"[];
            errorMessage: string;
        } | {
            required: "example4"[];
            errorMessage: string;
        })[];
    };
    /**
     * @satisfies {MockConfigOptional}
     */
    static defaults: {
        example1: string;
        example2: string;
        example3: number;
        example4: false;
    };
    constructor($root: Element | null, config?: Partial<MockConfigOptional> | undefined);
}
export type MockConfig = {
    /**
     * - A number
     */
    aNumber: number;
    /**
     * - A decimal number
     */
    aDecimalNumber: number;
    /**
     * - A boolean
     */
    aBoolean: boolean;
    /**
     * - A string
     */
    aString: string;
    /**
     * - A string boolean
     */
    aStringBoolean: "true" | "false";
    /**
     * - A string number
     */
    aStringNumber: string;
    /**
     * - An optional string
     */
    anOptionalString?: string | undefined;
    /**
     * - An object
     */
    anObject: {
        one: string;
        two: string;
        three: string;
    };
    /**
     * - An array
     */
    anArray1: (string | number | boolean)[];
    /**
     * - An array
     */
    anArray2: (string | number | boolean)[];
    /**
     * - An array
     */
    anArray3: (string | number | boolean)[];
    /**
     * - An array
     */
    anArray4: (string | number | boolean)[];
};
export type MockConfigBoolean = {
    /**
     * - Example boolean
     */
    example: boolean;
};
export type MockConfigNumber = {
    /**
     * - Example number
     */
    example: number;
};
export type MockConfigOptional = {
    /**
     * - Example string
     */
    example1?: string | undefined;
    /**
     * - Example string
     */
    example2?: string | undefined;
    /**
     * - Example number
     */
    example3?: number | undefined;
    /**
     * - Example boolean
     */
    example4?: boolean | undefined;
};
import { Component } from '../../../component.mjs';
import { ConfigurableComponent } from '../../../configurable-component.mjs';
//# sourceMappingURL=mock-component.d.mts.map