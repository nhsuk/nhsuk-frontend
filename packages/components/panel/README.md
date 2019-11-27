# Panel

## Guidance
To be confirmed with design community and added to NHS digital service manual

### Quick start example
[Preview of panel](https://nhsuk.github.io/nhsuk-frontend/components/panel/index.html)
[Preview of panel with clickable heading](https://nhsuk.github.io/nhsuk-frontend/components/panel-clickable-heading/index.html)
[Preview of clickable panel](https://nhsuk.github.io/nhsuk-frontend/components/panel-clickable/index.html)
[Preview of panel with an image](https://nhsuk.github.io/nhsuk-frontend/components/panel-with-image/index.html)
[Preview of panel with a label](https://nhsuk.github.io/nhsuk-frontend/components/panel-with-label/index.html)
[Preview of panel group](https://nhsuk.github.io/nhsuk-frontend/components/panel-group/index.html)

### HTML markup

#### Panel
```
<div class="nhsuk-panel">
  <h3>Live well</h3>
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>
</div>
```

#### Clickable panel
```
<div class="nhsuk-panel clickable-panel nhsuk-panel__link-wrapper">
  <h3><a href="https://www.nhs.uk">Save a life: give blood</a></h3>
  <p>Please register today. Donating blood is easy, and saves lives.</p>
</div>
```

#### Panel with clickable heading
```
<div class="nhsuk-panel">
  <h3><a href="https://www.nhs.uk">Save a life: give blood</a></h3>
  <p>Please register today. Donating blood is easy, and saves lives.</p>
</div>
```

#### Panel with an image
```
<div class="nhsuk-panel">
  <img class="nhsuk-panel__img" src="https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg" alt="Save a life: Give blood">
  <h3>Save a life: Give blood</h3>
  <p>Please register today. Donating blood is easy, and saves lives.</p>
</div>
```

#### Panel with a label
```
<div class="nhsuk-panel nhsuk-panel-with-label">
  <h3 class="nhsuk-panel-with-label__label">Live well</h3>
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>
</div>
```

#### Panel group
```
<div class="nhsuk-panel">
  <h3>Live well</h3>
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>
</div>
<div class="nhsuk-panel nhsuk-panel-with-label">
  <h3 class="nhsuk-panel-with-label__label">Live well</h3>
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>
</div>
<div class="nhsuk-panel nhsuk-panel-with-label">
  <h3 class="nhsuk-panel-with-label__label">Live well</h3>
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>
</div>
<div class="nhsuk-panel">
  <h3>Live well</h3>
  <p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>
</div>
```

### Nunjucks macro  

#### Panel
```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "heading": "Live well",
  "HTML": "<p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>"
}) }}
```

#### Clickable panel
```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "heading": "Save a life: give blood",
  "clickablePanel": true,
  "href": "https://www.nhs.uk",
  "HTML": "<p>Please register today. Donating blood is easy, and saves lives.</p>"
}) }}
```

#### Panel with clickable heading
```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "heading": "Save a life: give blood",
  "href": "https://www.nhs.uk",
  "HTML": "<p>Please register today. Donating blood is easy, and saves lives.</p>"
}) }}
```

#### Panel with an image
```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "heading": "Save a life: Give blood",
  "imgUrl": "https://assets.nhs.uk/prod/images/MS_1018_give_blood.2e16d0ba.fill-2400x1350.jpg",
  "imgAlt": "Save a life: Give blood",
  "HTML": "<p>Please register today. Donating blood is easy, and saves lives.</p>"
}) }}
```

#### Panel with a label
```
{% from 'components/panel/macro.njk' import panel %}

{{ panel({
  "label": "Live well",
  "HTML": "<p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>"
}) }}
```

#### Panel group
```
{% from 'components/panel/macro.njk' import panel %}

<div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "heading": "Live well",
      "HTML": "<p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>"
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "label": "Live well",
      "HTML": "<p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>"
    }) }}
  </div>
</div>
<div class="nhsuk-grid-row nhsuk-panel-group">
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "heading": "Save a life: Give blood",
      "clickablePanel": true,
      "href": "https://www.nhs.uk/",
      "HTML": "<p>Please register today. Donating blood is easy, and saves lives.</p>"
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-panel-group__item">
    {{ panel({
      "heading": "Live well",
      "HTML": "<p>Advice, tips and tools to help you make the best choices about your health and wellbeing</p>"
    }) }}
  </div>
```

### Nunjucks argument

| Name             | Type     | Required  | Description |
| -----------------|----------|-----------|-------------|
| headingLevel     | string   | No        | Heading level for the panel, defaults to h3 |
| clickablePanel   | boolean  | No        | If set to true, the panel becomes clickable |
| imgUrl           | string   | No        | The value of the image src attribute |
| imgAlt           | string   | No        | The value of the image alt attribute |
| href             | string   | Yes       | The value of the link href attribute |
| label            | string   | No        | The content for displaying a label |
| description      | string   | No        | The content displayed within the panel |
| HTML             | string   | No        | Additional content to be displayed |


If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).