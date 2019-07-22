# Care cards

## Guidance

Find out more about the care card component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/care-cards).

## Quick start examples

### Care card non-urgent (blue)

[Preview the care card non-urgent (blue) component](https://nhsuk.github.io/nhsuk-frontend/components/care-card/care-card-non-urgent.html)

#### HTML markup

```html
<div class="nhsuk-care-card nhsuk-care-card--non-urgent">
  <div class="nhsuk-care-card__heading-container">
    <h3 class="nhsuk-care-card__heading"><span role="text"><span class="nhsuk-u-visually-hidden">Non-urgent advice: </span>Speak to a GP if:</span></h3>
    <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
  </div>
  <div class="nhsuk-care-card__content">
    <ul>
      <li>you're not sure it's chickenpox</li>
      <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
      <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
      <li>you're concerned about your child or they get worse</li>
    </ul>
    <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/care-card/macro.njk' import careCard %}

{{ careCard({
  "type": "non-urgent",
  "heading": "Speak to a GP if:",
  "HTML": "
  <ul>
    <li>you're not sure it's chickenpox</li>
    <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
    <li>your child is <a href=\"https://www.nhs.uk/conditions/dehydration\">dehydrated</a></li>
    <li>you're concerned about your child or they get worse</li>
  </ul>
  <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
  "
}) }}
```

---

### Care card urgent (red)

[Preview care card urgent (red) component](https://nhsuk.github.io/nhsuk-frontend/components/care-card/care-card-urgent.html)

#### HTML markup

```html
<div class="nhsuk-care-card nhsuk-care-card--urgent">
  <div class="nhsuk-care-card__heading-container">
    <h3 class="nhsuk-care-card__heading"><span role="text"><span class="nhsuk-u-visually-hidden">Urgent advice: </span>Ask for an urgent GP appointment if:</span></h3>
    <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
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

#### Nunjucks macro

```
{% from 'components/care-card/macro.njk' import careCard %}

{{ careCard({
  "type": "urgent",
  "heading": "Ask for an urgent GP appointment if:",
  "HTML": "
  <ul>
    <li>you're an adult and have chickenpox</li>
    <li>you're pregnant and haven't had chickenpox before and you've been near someone with it </li>
    <li>you have a weakened immune system and you've been near someone with chickenpox</li>
    <li>you think your newborn baby has chickenpox</li>
  </ul>
   <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
  "
}) }}
```

---

### Care card immediate (red and black)

[Preview care card immediate (red and black) component](https://nhsuk.github.io/nhsuk-frontend/components/care-card/care-card-immediate.html)

#### HTML markup

```html
<div class="nhsuk-care-card nhsuk-care-card--immediate">
  <div class="nhsuk-care-card__heading-container">
    <h3 class="nhsuk-care-card__heading"><span role="text"><span class="nhsuk-u-visually-hidden">Immediate action required: </span>Call 999 if you have sudden chest pain that:</span></h3>
    <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
  </div>
  <div class="nhsuk-care-card__content">
    <ul>
      <li>spreads to your arms, back, neck or jaw</li>
      <li>makes your chest feel tight or heavy</li>
      <li>also started with shortness of breath, sweating and feeling or being sick</li>
    </ul>
    <p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/care-card/macro.njk' import careCard %}

{{ careCard({
  "type": "immediate",
  "heading": "Call 999 if you have sudden chest pain that:",
  "HTML": "
  <ul>
    <li>spreads to your arms, back, neck or jaw</li>
    <li>makes your chest feel tight or heavy</li>
    <li>also started with shortness of breath, sweating and feeling or being sick</li>
  </ul>
  <p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
  "
}) }}
```

---

### Nunjucks arguments

The care card Nunjucks macro takes the following arguments:

| Name                    | Type     | Required  | Description  |
| ------------------------|----------|-----------|--------------|
| **type**                | string   | Yes       | Care card component variant type - non-urgent, urgent or immediate |
| **heading**             | string   | Yes       | Heading to be used within the care card component |
| **HTML**                | string   | Yes       | Content to be used within the care card component |
| **headingLevel**        | integer  | No        | Optional heading level for the  heading. Default: 3 |
| **classes**             | string   | No        | Optional additional classes to add to the care card. Separate each class with a space. |
| **attributes**          | object   | No        | Any extra HTML attributes (for example data attributes) to add to the care card. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
