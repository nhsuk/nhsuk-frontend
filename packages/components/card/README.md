# Card

## Guidance

Find out more about the card component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/card).

## Quick start examples

### Basic card

[Preview the basic card component](https://nhsuk.github.io/nhsuk-frontend/components/card/basic-card.html)

#### HTML markup

```
<div class="nhsuk-card">
  <div class="nhsuk-card__content">
    <h3 class="nhsuk-card__heading">If you need help now, but it’s not an emergency</h3>
    <p class="nhsuk-card__description">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a></p>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/card/macro.njk' import card %}

{{ card({
  "heading": "If you need help now, but it’s not an emergency",
  "headingLevel": "3",
  "descriptionHtml": "<p class=\"nhsuk-card__description\">Go to <a href=\"#\">111.nhs.uk</a> or <a href=\"#\">call 111</a></p>"
}) }}
```

### Primary card (with chevron)

[Preview the primary card component](https://nhsuk.github.io/nhsuk-frontend/components/card/card-primary.html)

#### HTML markup

```
<div class="nhsuk-card nhsuk-card--clickable">
  <div class="nhsuk-card__content nhsuk-card__content--primary">
    <h2 class="nhsuk-card__heading nhsuk-heading-m">
      <a class="nhsuk-card__link" href="#">Introduction to care and support</a>
    </h2>
    <p class="nhsuk-card__description">A quick guide for people who have care and support needs and their carers</p>
    <svg class="nhsuk-icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" aria-hidden="true" focusable="false"><circle cx="13.333" cy="13.333" r="13.333" fill=""></circle><g data-name="Group 1" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.667"><path d="M15.438 13l-3.771 3.771"></path><path data-name="Path" d="M11.667 9.229L15.438 13"></path></g></svg>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/card/macro.njk' import card %}

{{ card({
  "href": "#",
  "primary": "true",
  "clickable": "true",
  "heading": "Introduction to care and support",
  "headingClasses": "nhsuk-heading-m",
  "description": "A quick guide for people who have care and support needs and their carers"
}) }}
```

### Secondary card

[Preview the secondary card component](https://nhsuk.github.io/nhsuk-frontend/components/card/card-secondary.html)

#### HTML markup

```
<div class="nhsuk-card nhsuk-card--clickable nhsuk-card--secondary">
  <div class="nhsuk-card__content nhsuk-card__content--secondary">
    <h2 class="nhsuk-card__heading nhsuk-heading-m">
        <a class="nhsuk-card__link" href="#">Urgent and emergency care services</a>
    </h2>
  <p class="nhsuk-card__description">Services the NHS provides if you need urgent or emergency medical help</p>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/card/macro.njk' import card %}

    {{ card({
      "href": "#",
      "clickable": "true",
      "secondary": "true",
      "heading": "Urgent and emergency care services",
      "headingClasses": "nhsuk-heading-m",
      "description": "Services the NHS provides if you need urgent or emergency medical help"
    }) }}
```

### Card with an image

[Preview the card with an image component](https://nhsuk.github.io/nhsuk-frontend/components/card/card-with-image.html)

#### HTML markup

```
<div class="nhsuk-card nhsuk-card--clickable ">
  <img class="nhsuk-card__img" src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg" alt="">
  <div class="nhsuk-card__content">
    <h2 class="nhsuk-card__heading nhsuk-heading-m">
      <a class="nhsuk-card__link" href="#">
        Exercise
      </a>
    </h2>
    <p class="nhsuk-card__description">Programmes, workouts and tips to get you moving and improve your fitness and wellbeing</p>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/card/macro.njk' import card %}

{{ card({
  "imgURL": "https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",
  "href": "#",
  "clickable": "true",
  "heading": "Exercise",
  "headingClasses": "nhsuk-heading-m",
  "description": "Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"
}) }}
```

### Card group

[Preview the card group component](https://nhsuk.github.io/nhsuk-frontend/components/card/card-group.html)

#### HTML markup

```
<h2>Halves</h2>

<ul class="nhsuk-grid-row nhsuk-card-group">
  <li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable ">
      <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading nhsuk-heading-m">
          <a class="nhsuk-card__link" href="#">
            Introduction to care and support
          </a>
        </h2>
        <p class="nhsuk-card__description">A quick guide for people who have care and support needs and their carers</p>
      </div>
    </div>
  </li>
  <li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable ">
      <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading nhsuk-heading-m">
          <a class="nhsuk-card__link" href="#">
            Help from social services and charities
          </a>
        </h2>
        <p class="nhsuk-card__description">Includes helplines, needs assessments, advocacy and reporting abuse</p>
      </div>
    </div>
  </li>
  <li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable ">
      <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading nhsuk-heading-m">
          <a class="nhsuk-card__link" href="#">
            Money, work and benefits
          </a>
        </h2>
        <p class="nhsuk-card__description">How to pay for care and support, and where you can get help with costs</p>
      </div>
    </div>
  </li>
  <li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable ">
      <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading nhsuk-heading-m">
          <a class="nhsuk-card__link" href="#">
            Care after a hospital stay
          </a>
        </h2>
        <p class="nhsuk-card__description">Includes hospital discharge and care and support afterwards</p>
      </div>
    </div>
  </li>
</ul>

<h2>Thirds</h2>

<ul class="nhsuk-grid-row nhsuk-card-group">
  <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable ">
      <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading nhsuk-heading-m">
          <a class="nhsuk-card__link" href="#">
            5 steps to mental wellbeing
          </a>
        </h2>
        <p class="nhsuk-card__description">Practical advice to help you feel mentally and emotionally better</p>
      </div>
    </div>
  </li>
  <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable ">
      <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading nhsuk-heading-m">
          <a class="nhsuk-card__link" href="#">
            Healthy weight
          </a>
        </h2>
        <p class="nhsuk-card__description">Check your BMI using our healthy weight calculator and find out if you're a healthy weight</p>
      </div>
    </div>
  </li>
  <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable ">
      <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading nhsuk-heading-m">
          <a class="nhsuk-card__link" href="#">
            Exercise
          </a>
        </h2>
        <p class="nhsuk-card__description">Programmes, workouts and tips to get you moving and improve your fitness and wellbeing</p>
      </div>
    </div>
  </li>
</ul>

<h2>Quarters</h2>

<ul class="nhsuk-grid-row nhsuk-card-group">
  <li class="nhsuk-grid-column-one-quarter nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable">
      <div class="nhsuk-card__content">
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">91 <span class="nhsuk-u-visually-hidden">Applicants</span></p>
        <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state" style="display:block">Applicants</a>
      </div>
    </div>
  </li>
  <li class="nhsuk-grid-column-one-quarter nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable">
      <div class="nhsuk-card__content">
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">23 <span class="nhsuk-u-visually-hidden">Jobs</span></p>
        <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">Jobs</a>
      </div>
    </div>
  </li>
  <li class="nhsuk-grid-column-one-quarter nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable">
      <div class="nhsuk-card__content">
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">8 <span class="nhsuk-u-visually-hidden">Services</span></p>
        <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">Services</a>
      </div>
    </div>
  </li>
  <li class="nhsuk-grid-column-one-quarter nhsuk-card-group__item">
    <div class="nhsuk-card nhsuk-card--clickable">
      <div class="nhsuk-card__content">
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">33 <span class="nhsuk-u-visually-hidden">Messages</span></p>
        <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">Messages</a>
      </div>
    </div>
  </li>
</ul>
```

#### Nunjucks macro

```
{% from 'components/card/macro.njk' import card %}

<h2>Halves</h2>

<ul class="nhsuk-grid-row nhsuk-card-group">
  <li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    {{ card({
      "href": "#",
      "clickable": "true",
      "heading": "Introduction to care and support",
      "headingClasses": "nhsuk-heading-m",
      "description": "A quick guide for people who have care and support needs and their carers"
    }) }}
  </li>
  <li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    {{ card({
      "href": "#",
      "clickable": "true",
      "heading": "Help from social services and charities",
      "headingClasses": "nhsuk-heading-m",
      "description": "Includes helplines, needs assessments, advocacy and reporting abuse"
    }) }}
  </li>
  <li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    {{ card({
      "href": "#",
      "clickable": "true",
      "heading": "Money, work and benefits",
      "headingClasses": "nhsuk-heading-m",
      "description": "How to pay for care and support, and where you can get help with costs"
    }) }}
  </li>
  <li class="nhsuk-grid-column-one-half nhsuk-card-group__item">
    {{ card({
      "href": "#",
      "clickable": "true",
      "heading": "Care after a hospital stay",
      "headingClasses": "nhsuk-heading-m",
      "description": "Includes hospital discharge and care and support afterwards"
    }) }}
  </li>
</ul>

<h2>Thirds</h2>

<ul class="nhsuk-grid-row nhsuk-card-group">
  <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
    {{ card({
      "href": "#",
      "clickable": "true",
      "heading": "5 steps to mental wellbeing",
      "headingClasses": "nhsuk-heading-m",
      "description": "Practical advice to help you feel mentally and emotionally better"
    }) }}
  </li>
  <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
    {{ card({
      "href": "#",
      "clickable": "true",
      "heading": "Healthy weight",
      "headingClasses": "nhsuk-heading-m",
      "description": "Check your BMI using our healthy weight calculator and find out if you're a healthy weight"
    }) }}
  </li>
  <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
    {{ card({
      "href": "#",
      "clickable": "true",
      "heading": "Exercise",
      "headingClasses": "nhsuk-heading-m",
      "description": "Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"
    }) }}
  </li>
</ul>

<h2>Quarters</h2>

<ul class="nhsuk-grid-row nhsuk-card-group">
  <li class="nhsuk-grid-column-one-quarter nhsuk-card-group__item">
    {{ card({
      "clickable": "true",
      "headingHtml": "<p class=\"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1\">91 <span class=\"nhsuk-u-visually-hidden\">Applicants</span></p><a href=\"#\" class=\"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state\">Applicants</a>"
    }) }}
  </li>
  <li class="nhsuk-grid-column-one-quarter nhsuk-card-group__item">
    {{ card({
      "clickable": "true",
      "headingHtml": "<p class=\"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1\">23 <span class=\"nhsuk-u-visually-hidden\">Jobs</span></p><a href=\"#\" class=\"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state\">Jobs</a>"
    }) }}
  </li>
  <li class="nhsuk-grid-column-one-quarter nhsuk-card-group__item">
    {{ card({
      "clickable": "true",
      "headingHtml": "<p class=\"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1\">8 <span class=\"nhsuk-u-visually-hidden\">Services</span></p><a href=\"#\" class=\"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state\">Services</a>"
    }) }}
  </li>
  <li class="nhsuk-grid-column-one-quarter nhsuk-card-group__item">
    {{ card({
      "clickable": "true",
      "headingHtml": "<p class=\"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1\">33 <span class=\"nhsuk-u-visually-hidden\">Messages</span></p><a href=\"#\" class=\"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state\">Messages</a>"
    }) }}
  </li>
</ul>
```

### Feature

[Preview the feature card component](https://nhsuk.github.io/nhsuk-frontend/components/card/feature-card.html)

#### HTML markup

```
<div class="nhsuk-card nhsuk-card--feature ">
  <div class="nhsuk-card__content
   nhsuk-card__content--feature ">
    <h2 class="nhsuk-card__heading nhsuk-card__heading--feature nhsuk-heading-m">
      Feature card heading
    </h2>
    <p class="nhsuk-card__description">Feature card description</p>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/card/macro.njk' import card %}

{{ card({
  "feature": "true",
  "heading": "Feature card heading",
  "headingClasses": "nhsuk-heading-m",
  "description": "Feature card description"
}) }}
```

### Care card non-urgent (blue)

[Preview the care card non-urgent (blue) component](https://nhsuk.github.io/nhsuk-frontend/components/card/care-card-non-urgent.html)

#### HTML markup

```html
<div class="nhsuk-card nhsuk-card--care nhsuk-card--care--non-urgent">
  <div class="nhsuk-card--care__heading-container">
    <h3 class="nhsuk-card--care__heading">
      <span role="text"><span class="nhsuk-u-visually-hidden">Non-urgent advice: </span>Speak to a GP if:</span>
    </h3>
    <span class="nhsuk-card--care__arrow" aria-hidden="true"></span>
  </div>
  <div class="nhsuk-card__content">
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
{% from 'components/card/macro.njk' import card %}

{{ card({
  "type": "non-urgent",
  "heading": "Speak to a GP if:",
  "headingLevel": 3,
  "descriptionHtml": "
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

[Preview care card urgent (red) component](https://nhsuk.github.io/nhsuk-frontend/components/card/care-card-urgent.html)

#### HTML markup

```html
<div class="nhsuk-card nhsuk-card--care nhsuk-card--care--urgent">
  <div class="nhsuk-card--care__heading-container">
    <h3 class="nhsuk-card--care__heading">
      <span role="text"><span class="nhsuk-u-visually-hidden">Urgent advice: </span>Ask for an urgent GP appointment if:</span>
    </h3>
    <span class="nhsuk-card--care__arrow" aria-hidden="true"></span>
  </div>
  <div class="nhsuk-card__content">
    <ul>
      <li>you're an adult and have chickenpox</li>
      <li>you're pregnant and haven't had chickenpox before and you've been near someone with it</li>
      <li>you have a weakened immune system and you've been near someone with chickenpox</li>
      <li>you think your newborn baby has chickenpox</li>
    </ul>
    <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
  </div>
</div>
```

#### Nunjucks macro

```
{% from 'components/card/macro.njk' import card %}

{{ card({
  "type": "urgent",
  "heading": "Ask for an urgent GP appointment if:",
  "headingLevel": 3,
  "descriptionHtml": "
  <ul>
    <li>you're an adult and have chickenpox</li>
    <li>you're pregnant and haven't had chickenpox before and you've been near someone with it</li>
    <li>you have a weakened immune system and you've been near someone with chickenpox</li>
    <li>you think your newborn baby has chickenpox</li>
  </ul>
  <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
  "
}) }}
```

---

### Care card emergency (red and black)

[Preview care card emergency (red and black) component](https://nhsuk.github.io/nhsuk-frontend/components/card/care-card-emergency.html)

#### HTML markup

```html
<div class="nhsuk-card nhsuk-card--care nhsuk-card--care--emergency">
  <div class="nhsuk-card--care__heading-container">
    <h3 class="nhsuk-card--care__heading">
      <span role="text"><span class="nhsuk-u-visually-hidden">Immediate action required: </span>Call 999 if you have sudden chest pain that:</span>
    </h3>
    <span class="nhsuk-card--care__arrow" aria-hidden="true"></span>
  </div>
  <div class="nhsuk-card__content">
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
{% from 'components/card/macro.njk' import card %}

{{ card({
  "type": "emergency",
  "heading": "Call 999 if you have sudden chest pain that:",
  "headingLevel": 3,
  "descriptionHtml": "
  <ul>
    <li>spreads to your arms, back, neck or jaw</li>
    <li>makes your chest feel tight or heavy</li>
    <li>also started with shortness of breath, sweating and feeling or being sick</li>
  </ul>
  <p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
  "
}) }}
```

### Nunjucks arguments

The card Nunjucks macro takes the following arguments:

| Name                | Type    | Required | Description                                                                                                         |
| ------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| **heading**         | string  | Yes      | Text heading of the card. If headingHtml is provided, the heading argument will be ignored.                         |
| **headingHtml**     | string  | Yes      | HTML heading of the card. If headingHtml is provided, the heading argument will be ignored.                         |
| **headingClasses**  | string  | No       | Optional additional classes to add to heading. Separate each class with a space.                                    |
| **headingLevel**    | integer | No       | Optional heading level for the card heading. Default: 2                                                             |
| **href**            | string  | No       | The value of the card href attribute                                                                                |
| **clickable**       | boolean | No       | If set to true, then the class `nhsuk-card--clickable` will be applied.                                             |
| **feature**         | boolean | No       | If set to true, then the class `nhsuk-card__heading--feature` and `nhsuk-card__content--feature` will be applied.   |
| **primary**         | boolean | No       | If set to true, then the class `nhsuk-card__content--primary` will be applied.                                      |
| **secondary**       | boolean | No       | If set to true, then the class `nhsuk-card--secondary` and `nhsuk-card__content--secondary` will be applied.        |
| **type**            | string  | No       | Care card component variant type - non-urgent, urgent or emergency                                                  |
| **imgURL**          | string  | No       | The URL of the image in the card                                                                                    |
| **imgALT**          | string  | No       | The alternative text of the image in the card                                                                       |
| **description**     | string  | No       | Text description within the card content. If descriptionHtml is provided, the description argument will be ignored. |
| **descriptionHtml** | string  | No       | HTML to use within the card content. If descriptionHtml is provided, the description argument will be ignored.      |
| **classes**         | string  | No       | Optional additional classes to add to the card. Separate each class with a space.                                   |
| **attributes**      | object  | No       | Any extra HTML attributes (for example data attributes) to add to the card.                                         |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
