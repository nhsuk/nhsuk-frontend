# Inset text

## Introduction

The inset text component helps convey useful information on the page.

## Guidance

Find out when to use the inset text component in the [Digital service manual]().

## Example

[Preview the inset text component]()

#### Markup

    <div class="nhsuk-c-inset-text">
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>

#### Macro

    {% from 'components/inset-text/macro.njk' import insetText %}

    {{ insetText('<p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>') }}
