# Fieldset

## Guidance

Find out more about the fieldset component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/fieldset).

## Quick start examples

### Fieldset

[Preview the fieldset component](https://nhsuk.github.io/nhsuk-frontend/components/fieldset/index.html)

#### HTML markup

```html
<fieldset class="nhsuk-fieldset">
  <legend class="nhsuk-fieldset__legend">
    What is your address?
  </legend>
</fieldset>
```

#### Nunjucks macro

```
{% from 'components/fieldset/macro.njk' import fieldset %}

{{ fieldset({
  "legend": {
    "text": "What is your address?"
  }
}) }}
```

---

### Fieldset as page heading

[Preview the fieldset as page heading component](https://nhsuk.github.io/nhsuk-frontend/components/fieldset/page-heading.html)

#### HTML markup

```html
<fieldset class="nhsuk-fieldset">
  <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--xl">
    <h1 class="nhsuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
</fieldset>
```

#### Nunjucks macro

```
{% from 'components/fieldset/macro.njk' import fieldset %}

{{ fieldset({
  "legend": {
    "text": "What is your address?",
    "classes": "nhsuk-fieldset__legend--xl",
    "isPageHeading": true
  }
}) }}
```

---

### Fieldset with input fields

[Preview the fieldset component with input fields](https://nhsuk.github.io/nhsuk-frontend/components/fieldset/with-inputs.html)

#### HTML markup

```html
<fieldset class="nhsuk-fieldset">
  <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--xl">
    <h1 class="nhsuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="input-address1">
      Address line 1
    </label>
    <input class="nhsuk-input" id="input-address1" name="address1" type="text">
  </div>
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="input-address2">
      Address line 2
    </label>
    <input class="nhsuk-input" id="input-address2" name="address2" type="text">
  </div>
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="input-town-city">
      Town or city
    </label>
    <input class="nhsuk-input" id="input-town-city" name="town" type="text">
  </div>
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" for="input-county">
      County
    </label>
    <input class="nhsuk-input" id="input-county" name="county" type="text">
  </div>
</fieldset>

```

#### Nunjucks macro

To add input fields inside the fieldset, use the `call` block.

```
{% from 'components/input/macro.njk' import input %}
{% from 'components/fieldset/macro.njk' import fieldset %}

{% call fieldset({
  legend: {
    text: "What is your address?",
    "classes": "nhsuk-fieldset__legend--xl",
    "isPageHeading": true
  }
}) %}

  {{ input({
    "label": {
      "text": "Address line 1"
    },
    "id": "input-address1",
    "name": "address1"
  }) }}

  {{ input({
    "label": {
      "text": "Address line 2"
    },
    "id": "input-address2",
    "name": "address2"
  }) }}

  {{ input({
    "label": {
      "text": "Town or city"
    },
    "id": "input-town-city",
    "name": "town"
  }) }}

  {{ input({
    "label": {
      "text": "County"
    },
    "id": "input-county",
    "name": "county"
  }) }}

{% endcall %}
```

---

### Nunjucks arguments

The fieldset Nunjucks macro takes the following arguments:

| Name                                   | Type    | Required | Description                                                                                                                         |
| -------------------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **describedBy**                        | string  | No       | Text or element id to add to the `aria-describedby` attribute to provide description of the group of fields for screenreader users. |
| **legend**                             | object  | No       | Arguments for the legend.                                                                                                           |
| **legend.{}.text (or) legend.{}.html** | string  | No       | Legend text or HTML. If `html` is provided, the `text` argument will be ignored.                                                    |
| **legend.{}.classes**                  | string  | No       | Optional additional classes to add to the legend container.                                                                         |
| **legend.{}.isPageHeading**            | boolean | No       | Whether the legend also acts as the heading for the page.                                                                           |
| **classes**                            | string  | No       | Optional additional classes to add to the fieldset container. Separate each class with a space.                                     |
| **attributes**                         | object  | No       | Any extra HTML attributes (for example data attributes) to add to the fieldset container.                                           |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

## Thanks to the Government Digital Service (GDS)

This component and documentation has been taken from [GOV.UK Frontend - Fieldset component](https://github.com/alphagov/govuk-frontend/tree/main/package/govuk/components/fieldset) with a few minor adaptations.
