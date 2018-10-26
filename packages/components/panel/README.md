# Panel

## Introduction

## Guidance

Find out when to use the panel component in the [Digital service manual]().

## Example

[Preview the promo component]()

### Panel

#### Markup

    <div class="nhsuk-c-panel">
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>

#### Macro

    {% from 'components/panel/macro.njk' import panel %}

    {{ panel({
      "HTML": "
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
    }) }}

### Panel with a label

#### Markup

    <div class="nhsuk-c-panel-with-label">
      <h3 class="nhsuk-c-panel-with-label__label">Panel heading</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>

#### Macro

    {% from 'components/panel/macro.njk' import panel %}

    {{ panel({
      "label": "Panel heading",
      "HTML": "<p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
    }) }}
           
### Panel (background colour grey)

#### Markup

    <div class="nhsuk-c-panel nhsuk-c-panel--grey">
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
    </div>

#### Macro

    {% from 'components/panel/macro.njk' import panel %}

    {{ panel({
      "colour": "grey",
      "HTML": "
      <h3>Panel title</h3>
      <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
    }) }}

### Panel group

#### Markup

    <div class="nhsuk-grid-row nhsuk-c-panel-group">
      <div class="nhsuk-grid-column-one-half nhsuk-c-panel-group__item">
        <div class="nhsuk-c-panel">
          <h3>Panel title</h3>
          <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
        </div>
      </div>
      <div class="nhsuk-grid-column-one-half nhsuk-c-panel-group__item">
        <div class="nhsuk-c-panel">
          <h3>Panel title</h3>
          <p>If you drive you must tell the <a href="https://www.gov.uk/contact-the-dvla" title="External website">DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href="https://www.gov.uk/dizziness-and-driving" title="External website">driving with vertigo</a></p>
        </div>
      </div>
    </div>

#### Macro

    {% from 'components/panel/macro.njk' import panel %}

    <div class="nhsuk-grid-row nhsuk-c-panel-group">
      <div class="nhsuk-grid-column-one-half nhsuk-c-panel-group__item">
        {{ panel({
          "HTML": "<h3>Panel title</h3> <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
        }) }}
      </div>
      <div class="nhsuk-grid-column-one-half nhsuk-c-panel-group__item">
        {{ panel({
          "HTML": "<h3>Panel title</h3> <p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla\' title='External website\'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href=\"https://www.gov.uk/dizziness-and-driving\" title=\"External website\">driving with vertigo</a></p>"
        }) }}
      </div>
    </div>
