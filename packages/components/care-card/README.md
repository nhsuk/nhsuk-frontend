# Care cards

Find out more about the care card component and when to use it in the [NHS Digital service manual](https://beta.nhs.uk/service-manual/patterns/).

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/160).

## Quick start examples

### Primary Care card

[Preview this component](https://nhsuk.github.io/nhsuk-frontend/components/care-card-blue.html)

### HTML markup

```html
<div class="nhsuk-care-card">
  <div class="nhsuk-care-card__heading-container">
    <h3 class="nhsuk-care-card__heading"><span class="nhsuk-u-visually-hidden">Non-urgent care: </span>Speak to a GP if:</h3>
  </div>
  <div class="nhsuk-care-card__content">
    <ul>
      <li>you're not sure it's chickenpox</li>
      <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
      <li>your child is <a href='#'>dehydrated</a></li>
      <li>you're concerned about your child or they get worse</li>
    </ul>
    <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
  </div>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/care-card/macro.njk' import careCard %}

{{ careCard({
  "type": "primary",
  "heading": "Speak to a GP if:",
  "HTML": "
  <ul>
    <li>you're not sure it's chickenpox</li>
    <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
    <li>your child is <a href='https://www.nhs.uk/'>dehydrated</a></li>
    <li>you're concerned about your child or they get worse</li>
  </ul>
  <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
  "
}) }}
```

#### Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments: 

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| type                | string   | Yes       | Care card component variant types: "primary", "emergency", "urgent" |
| heading             | string   | Yes       | Heading to be used within the care card component |
| HTML                | string   | Yes       | Content to be used within the care card component |
| classes             | string   | No        | Optional additional classes to add to the anchor tag. Separate each class with a space. |
| attributes          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the care card. |

### Emergency Care card

[Preview this component](https://nhsuk.github.io/nhsuk-frontend/components/care-card-red.html)

### HTML markup

```html
<div class="nhsuk-care-card nhsuk-care-card--emergency">
  <div class="nhsuk-care-card__heading-container">
    <h3 class="nhsuk-care-card__heading"><span class="nhsuk-u-visually-hidden">Urgent care low: </span>Ask for an urgent GP appointment if:</h3>
  </div>
  <div class="nhsuk-care-card__content">
    <ul>
      <li>you're an adult and have chickenpox</li>
      <li>you're pregnant and haven't had chickenpox before and you've been near someone with it </li>
      <li>you have a weakened immune system and you've been near someone with chickenpox</li>
      <li>you think your newborn baby has chickenpox</li>
    </ul>
    <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
  </div>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/care-card/macro.njk' import careCard %}

{{ careCard({
  "type": "emergency",
  "heading": "Ask for an urgent GP appointment if:",
  "HTML": "
  <ul>
    <li>you're an adult and have chickenpox</li>
    <li>you're pregnant and haven't had chickenpox before and you've been near someone with it </li>
    <li>you have a weakened immune system and you've been near someone with chickenpox</li>
    <li>you think your newborn baby has chickenpox</li>
  </ul>
  "
}) }}
```

#### Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments: 

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| type                | string   | Yes       | Care card component variant types: "primary", "emergency", "urgent" |
| heading             | string   | Yes       | Heading to be used within the care card component |
| HTML                | string   | Yes       | Content to be used within the care card component |
| classes             | string   | No        | Optional additional classes to add to the anchor tag. Separate each class with a space. |
| attributes          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the care card. |

### Urgent Care card

[Preview this component](https://nhsuk.github.io/nhsuk-frontend/components/care-card-black.html)

### HTML markup

```html
<div class="nhsuk-care-card nhsuk-care-card--urgent">
  <div class="nhsuk-care-card__heading-container">
    <h3 class="nhsuk-care-card__heading"><span class="nhsuk-u-visually-hidden">Urgent care high: </span>Call 999 if you have sudden chest pain that:</h3>
  </div>
  <div class="nhsuk-care-card__content">
    <ul>
      <li>spreads to your arms, back, neck or jaw</li>
      <li>makes your chest feel tight or heavy</li>
      <li>also started with shortness of breath, sweating and feeling or being sick</li>
    </ul>
    <p>You could be having a <a href=''>heart attack</a>. Call 999 immediately as you need immediate treatment in hospital.</p>
  </div>
</div>
```

### Nunjucks macro

If you’re using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://en.wikipedia.org/wiki/Cross-site_scripting). More about it in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).

```
{% from 'components/care-card/macro.njk' import careCard %}

{{ careCard({
  "type": "urgent",
  "heading": "Call 999 if you have sudden chest pain that:",
  "HTML": "
  <ul>
    <li>spreads to your arms, back, neck or jaw</li>
    <li>makes your chest feel tight or heavy</li>
    <li>also started with shortness of breath, sweating and feeling or being sick</li>
  </ul>
  <p>You could be having a <a href='https://www.nhs.uk\'>heart attack</a>. Call 999 immediately as you need immediate treatment in hospital.</p>
  "
}) }}
```
#### Nunjucks arguments

If you are using Nunjucks, then macros take the following arguments: 

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| type                | string   | Yes       | Care card component variant types: "primary", "emergency", "urgent" |
| heading             | string   | Yes       | Heading to be used within the care card component |
| HTML                | string   | Yes       | Content to be used within the care card component |
| classes             | string   | No        | Optional additional classes to add to the anchor tag. Separate each class with a space. |
| attributes          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the care card. |
