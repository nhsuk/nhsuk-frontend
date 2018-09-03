# Tables

## Introduction

The table component shows data or comparative information in an easy to read format.

## Guidance

Find out when to use the table component in the [Digital service manual]().

## Example

[Preview the table component]()

#### Markup

    <table class="nhsuk-table">
      <thead>
        <tr>
          <th>Skin symptoms</th>
          <th>Possible cause</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Blisters on lips or around the mouth</td>
          <td>cold sores</td>
        </tr>
        <tr>
          <td>Itchy, dry, cracked, sore</td>
          <td>eczema</td>
        </tr>
        <tr>
          <td>Itchy blisters</td>
          <td>shingles, chickenpox</td>
        </tr>
      </tbody>
    </table>

#### Macro

    {% from 'components/tables/macro.njk' import table %}

    {{ table({
      "rows": [
        [
          {
            "text": "Skin symptoms"
          },
          {
            "text": "Possible cause"
          }
        ],
        [
          {
            "text": "Blisters on lips or around the mouth"
          },
          {
            "text": "cold sores"
          }
        ],
        [
          {
            "text": "Itchy, dry, cracked, sore"
          },
          {
            "text": "eczema"
          }
        ],
        [
          {
            "text": "Itchy blisters"
          },
          {
            "text": "shingles, chickenpox"
          }
        ]
      ]
    }) }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
