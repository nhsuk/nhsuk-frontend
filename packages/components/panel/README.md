# Panel

## Quick start examples

### Panel

[Preview the panel component](https://nhsuk.github.io/nhsuk-frontend/components/panel/index.html)

#### HTML markup

```html
<div class="nhsuk-panel">
  <h3>Live well</h3>
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>
</div>
```

#### Nunjucks macro

```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "HTML": "<h3>Live well</h3>
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>"
}) }}
```

---

### Panel with a label

[Preview the panel with a label component](https://nhsuk.github.io/nhsuk-frontend/components/panel/panel-with-label.html)

#### HTML markup

```html
<div class="nhsuk-panel-with-label">
  <h3 class="nhsuk-panel-with-label__label">Live well</h3>
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>
</div>
```

#### Nunjucks macro

```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "label": "Live well",
  "HTML": "<p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>"
}) }}
```

---

### Grey panel

[Preview the grey panel component](https://nhsuk.github.io/nhsuk-frontend/components/panel/panel-grey.html)

#### HTML markup

```html
<div class="nhsuk-panel nhsuk-panel--grey">
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>
</div>
```

#### Nunjucks macro

```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "colour": "grey",
  "HTML": "
  <h3>Live well</h3>
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>"
}) }}
```

---

### Panel group

[Preview the panel group component](https://nhsuk.github.io/nhsuk-frontend/components/panel/panel-group.html)

#### HTML markup

```html
<div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    <div class="nhsuk-panel">
      <h3>Eat well</h3>
      <p>All you need to know about the major food groups and a healthy, balanced diet</p>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    <div class="nhsuk-panel">
      <h3>Healthy weight</h3>
      <p>Check your BMI using our healthy weight calculator and find out if you're a healthy weight</p>
    </div>
  </div>
</div>
<div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    <div class="nhsuk-panel">
      <h3>Excercise</h3>
      <p>Programmes, workouts and tips to get you moving and improve your fitness and wellbeing</p>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    <div class="nhsuk-panel">
      <h3>Sleep and tiredness</h3>
      <p>Find out how to sleep well and the common lifestyle factors that are making you tired</p>
    </div>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/panel/macro.njk' import panel %}

<div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "HTML": "<h3>Eat well</h3> <p>All you need to know about the major food groups and a healthy, balanced diet</p>"
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "HTML": "<h3>Healthy weight</h3> <p>Check your BMI using our healthy weight calculator and find out if you're a healthy weight</p>"
    }) }}
  </div>
 </div>
 <div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "HTML": "<h3>Excercise</h3> <p>Programmes, workouts and tips to get you moving and improve your fitness and wellbeing</p>"
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "HTML": "<h3>Sleep and tiredness</h3> <p>Find out how to sleep well and the common lifestyle factors that are making you tired</p>"
    }) }}
  </div>
</div>
```

---

### Nunjucks arguments

The panel Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **HTML**            | string   | Yes       | HTML content to be used within the panel component. |
| **label**           | string   | No        | The label of the panel component. |
| **headingLevel**    | integer  | No        | Optional heading level for the label  heading. Default: 3 |
| **classes**         | string   | No        | Optional additional classes to add to the panel. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the panel. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
