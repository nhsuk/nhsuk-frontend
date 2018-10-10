# Callout

## Introduction

The callout component helps convey important content on the page.

## Guidance

Find out when to use the callout component in the [Digital service manual]().

## Example

### Important callout

[Preview the important callout component]()

#### Markup

    <div class="nhsuk-c-warning-callout">
      <h3 class="nhsuk-c-warning-callout__heading-tab">Important</h3>
      <p>If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help.</p>
    </div>

#### Macro

    {% from 'components/callout/macro.njk' import warningCallout %}

    {{ warningCallout({
      "heading": "Important",
      "html": "<p>If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help.</p>"
    }) }}
