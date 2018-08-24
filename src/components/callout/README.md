# Callouts

## Introduction

The callout component helps convey important content on the page.

## Guidance

Find out when to use the callout components in the [Digital service manual]().

## Example

### Important callout

[Preview the important callout component]()

#### Markup

    <div class="nhsuk-c-panel nhsuk-c-panel__warning">
      <h3>Important</h3>
      <p>If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help.</p>
    </div>

#### Macro

    {% from 'components/callout/macro.njk' import callout %}

    {{ callout('Important', '<p>If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help.</p>') }}

### Keypoint callout

[Preview the keypoint callout component]()

#### Markup

    <div class="nhsuk-c-keypoint">
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>

#### Macro

    {% from 'components/callout/macro-keypoint.njk' import keypoint %}

    {{ callout('<p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>') }}
