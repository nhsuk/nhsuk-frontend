# Promo

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/176).

## Quick start examples

### Promo

[Preview the promo component](https://nhsuk.github.io/nhsuk-frontend/components/promo/index.html)

### HTML markup

```html
<div class="nhsuk-promo">
  <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
    <div class="nhsuk-promo__content">
      <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
      <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
    </div>
  </a>
</div>
```

### Nunjucks macro

```
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "href": "https://www.nhs.uk",
  "heading": "Save a life: give blood",
  "description": "Please register today. Donating blood is easy, and saves lives."
}) }}
```

### Promo with image

[Preview the promo with image component](https://nhsuk.github.io/nhsuk-frontend/components/promo/promo-with-image.html)

### HTML markup

```html
<div class="nhsuk-promo">
  <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
    <img class="nhsuk-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png" alt="" />
    <div class="nhsuk-promo__content">
      <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
      <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
    </div>
  </a>
</div>
```

### Nunjucks macro

```
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "href": "https://www.nhs.uk",
  "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
  "heading": "Save a life: give blood",
  "description": "Please register today. Donating blood is easy, and saves lives."
}) }}
```

### Promo with no description

[Preview the promo with no description component](https://nhsuk.github.io/nhsuk-frontend/components/promo/promo-with-image.html)

### HTML markup

```html
<div class="nhsuk-promo">
  <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
    <div class="nhsuk-promo__content">
      <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
    </div>
  </a>
</div>
```

### Nunjucks macro

```
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "href": "https://www.nhs.uk",
  "heading": "Save a life: give blood"
}) }}
```

#### Nunjucks arguments

The promo with no description Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **href**            | string   | Yes       | The value of the promo href attribute |
| **heading**         | string   | Yes       | The text heading of the promo |
| **classes**         | string   | No        | Optional additional classes to add to the promo. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the promo. |


### Small promo

[Preview the small promo component](https://nhsuk.github.io/nhsuk-frontend/components/promo/promo-small.html)

### HTML markup

```html
<div class="nhsuk-promo nhsuk-promo--small">
  <a class="nhsuk-promo__link-wrapper" href="https://www.nhs.uk">
    <div class="nhsuk-promo__content">
      <h3 class="nhsuk-promo__heading">Access your GP record</h3>
      <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
    </div>
  </a>
</div>
```

## Nunjucks macro

```
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "classes": "nhsuk-promo--small",
  "href": "https://www.nhs.uk",
  "heading": "Access your GP record",
  "description": "Please register today. Donating blood is easy, and saves lives."
}) }}
```

#### Nunjucks arguments

The small promo Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **href**            | string   | Yes       | The value of the promo href attribute |
| **heading**         | string   | Yes       | The text heading of the promo |
| **classes**         | string   | Yes       | Additional classes to add to the promo. Separate each class with a space. Must have `nhsuk-promo--small` |
| **imgURL**          | string   | No        | The URL of the image in the promo |
| **description**     | string   | No        | The text description of the promo |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the promo. |

### Promo group

[Preview the promo group component](https://nhsuk.github.io/nhsuk-frontend/components/promo/promo-group.html)

## HTML markup

```html
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper"  href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png" alt=""/>
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper"  href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png" alt=""/>
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
</div>
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper"  href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png" alt=""/>
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper"  href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png" alt=""/>
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper"  href="https://www.nhs.uk">
        <img class="nhsuk-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png" alt=""/>
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>
  </div>
</div>
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    <div class="nhsuk-promo nhsuk-promo--small">
      <a class="nhsuk-promo__link-wrapper"  href="https://www.nhs.uk">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
        </div>
      </a>
    </div>
  </div>
  <div class="nhsuk-grid-column-one-half nhsuk-promo-group__item">
    <div class="nhsuk-promo nhsuk-promo--small">
      <a class="nhsuk-promo__link-wrapper"  href="https://www.nhs.uk">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Save a life: give blood</h3>
        </div>
      </a>
    </div>
  </div>
</div>
```

### Nunjucks macro

```
<div class="nhsuk-grid-row nhsuk-promo-group">
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
  <div class="nhsuk-grid-column-one-third nhsuk-promo-group__item">
    {{ promo({
      "href": "https://www.nhs.uk",
      "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
  </div>
</div>
```

#### Nunjucks arguments

The promo group Nunjucks macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **href**            | string   | Yes       | The value of the promo href attribute |
| **heading**         | string   | Yes       | The text heading of the promo |
| **imgURL**          | string   | No        | The URL of the image in the promo |
| **description**     | string   | No        | The text description of the promo |
| **classes**         | string   | No        | Optional additional classes to add to the promo. Separate each class with a space. |
| **attributes**      | object   | No        | Any extra HTML attributes (for example data attributes) to add to the promo. |
