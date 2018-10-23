# Tables

## Introduction

The table component shows data or comparative information in an easy to read format.

## Guidance

Find out when to use the table component in the [Digital service manual]().

## Example

[Preview the table component]()

### Table

#### Markup

    <div class="nhsuk-table-responsive">
      <table class="nhsuk-table">
        <caption class="nhsuk-table__caption">Skin symptoms and possible causes</caption>
        <thead class="nhsuk-table__head">
          <tr class="nhsuk-table__row">
            <th class="nhsuk-table__header" scope="col">Skin symptoms</th>
            <th class="nhsuk-table__header" scope="col">Possible cause</th>
          </tr>
        </thead>
        <tbody class="nhsuk-table__body">
          <tr class="nhsuk-table__row">
            <td class="nhsuk-table__cell">Blisters on lips or around the mouth</td>
            <td class="nhsuk-table__cell ">cold sores</td>
          </tr>
          <tr class="nhsuk-table__row">
            <td class="nhsuk-table__cell">Itchy, dry, cracked, sore</td>
            <td class="nhsuk-table__cell ">eczema</td>
          </tr>  
          <tr class="nhsuk-table__row">
            <td class="nhsuk-table__cell">Itchy blisters</td>
            <td class="nhsuk-table__cell ">shingles, chickenpox</td>
          </tr>
        </tbody>
      </table>
    </div>

#### Macro

    {% from 'components/tables/macro.njk' import table %}

    {{ table({
      panel: false,
      caption: "Skin symptoms and possible causes",
      firstCellIsHeader: false,
      head: [
        {
          text: "Skin symptoms"
        },
        {
          text: "Possible cause"
        }
      ],
      rows: [
        [
          {
            text: "Blisters on lips or around the mouth"
          },
          {
            text: "cold sores"
          }
        ],
        [
          {
            text: "Itchy, dry, cracked, sore"
          },
          {
            text: "eczema"
          }
        ],
        [
          {
            text: "Itchy blisters"
          },
          {
            text: "shingles, chickenpox"
          }
        ]
      ]
    }) }}

### Table panel

    <div class="nhsuk-table__panel-with-heading-tab">
      <h3 class="nhsuk-table__heading-tab">Skin symptoms and possible causes</h3>
      <div class="nhsuk-table-responsive">
        <table class="nhsuk-table">  
          <caption class="nhsuk-table__caption">Skin symptoms and possible causes</caption>
          <thead class="nhsuk-table__head">
            <tr class="nhsuk-table__row">
              <th class="nhsuk-table__header" scope="col">Skin symptoms</th>
              <th class="nhsuk-table__header" scope="col">Possible cause</th>
            </tr>
          </thead>
          <tbody class="nhsuk-table__body">
            <tr class="nhsuk-table__row">
              <td class="nhsuk-table__cell">Blisters on lips or around the mouth</td>
              <td class="nhsuk-table__cell ">cold sores</td>
            </tr>
            <tr class="nhsuk-table__row">
              <td class="nhsuk-table__cell">Itchy, dry, cracked, sore</td>
              <td class="nhsuk-table__cell ">eczema</td>
            </tr>
            <tr class="nhsuk-table__row">
              <td class="nhsuk-table__cell">Itchy blisters</td>
              <td class="nhsuk-table__cell ">shingles, chickenpox</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

#### Macro

    {% from 'components/tables/macro.njk' import table %}

    {{ table({
      panel: true,
      heading: "Skin symptoms and possible causes",
      caption: "Skin symptoms and possible causes",
      firstCellIsHeader: false,
      head: [
        {
          text: "Skin symptoms"
        },
        {
          text: "Possible cause"
        }
      ],
      rows: [
        [
          {
            text: "Blisters on lips or around the mouth"
          },
          {
            text: "cold sores"
          }
        ],
        [
          {
            text: "Itchy, dry, cracked, sore"
          },
          {
            text: "eczema"
          }
        ],
        [
          {
            text: "Itchy blisters"
          },
          {
            text: "shingles, chickenpox"
          }
        ]
      ]
    }) }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
