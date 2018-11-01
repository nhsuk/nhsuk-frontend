# Promo

Find out more about the promo component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the promo component]()

## HTML markup

```html
<div class="nhsuk-c-promo nhsuk-c-promo--small">
  <a href="/news/article">
    <div class="nhsuk-c-promo__content">
      <h3 class="nhsuk-c-promo__heading">Prescription changes</h3>
      <p class="nhsuk-c-promo__description">The NHS is reducing prescriptions for medicines you can buy in a pharmacy. Find out what this means for you.</p>
    </div>
  </a>
</div>
```

## Nunjucks macro

```html
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "href": "/news/article",
  "heading": "Prescription changes",
  "description": "The NHS is reducing prescriptions for medicines you can buy in a pharmacy. Find out what this means for you."
}) }}
```

## Promo with image

## Example

[Preview the promo with image component]()

## HTML markup

```html
<div class="nhsuk-c-promo">
  <a href="http://www.blood.co.uk/?utm_source=nhsc_hp_blood&amp;utm_medium=referral&amp;utm_content=web&amp;utm_campaign=partner">
    <img class="nhsuk-c-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png);" alt="">
    <div class="nhsuk-c-promo__content">
      <h3 class="nhsuk-c-promo__heading">Save a life: give blood</h3>
      <p class="nhsuk-c-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
    </div>
  </a>
</div>
```

## Nunjucks macro

```html
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "href": "http://www.blood.co.uk/?utm_source=nhsc_hp_blood&amp;utm_medium=referral&amp;utm_content=web&amp;utm_campaign=partner",
  "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
  "heading": "Save a life: give blood",
  "description": "Please register today. Donating blood is easy, and saves lives."
}) }}
```
           
## Promo with no description

## Example

[Preview the promo with no description component]()

## HTML markup

```html
<div class="nhsuk-c-promo">
  <a href="https://www.nhs.uk/nhsengland/aboutnhsservices/doctors/pages/gp-online-services.aspx">
    <div class="nhsuk-c-promo__content">
    <h3 class="nhsuk-c-promo__heading">Access your GP record</h3>
  </div>
  </a>
</div>
```

## Nunjucks macro

```html
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "href": "https://www.nhs.uk/nhsengland/aboutnhsservices/doctors/pages/gp-online-services.aspx",
  "heading": "Access your GP record"
}) }}
```

## Small promo

## Example

[Preview the small promo component]()

## HTML markup

```html
<div class="nhsuk-c-promo nhsuk-c-promo--small">
  <a href="https://www.nhs.uk/nhsengland/aboutnhsservices/doctors/pages/gp-online-services.aspx">
    <div class="nhsuk-c-promo__content">
    <h3 class="nhsuk-c-promo__heading">Access your GP record</h3>
  </div>
  </a>
</div>
```

## Nunjucks macro

```html
{% from 'components/promo/macro.njk' import promo%}

{{ promo({
  "classes": "nhsuk-c-promo--small",
  "href": "https://www.nhs.uk/nhsengland/aboutnhsservices/doctors/pages/gp-online-services.aspx",
  "heading": "Access your GP record"
}) }}
```

## Promo group

## Example

[Preview the promo group component]()

## HTML markup

```html
<div class="nhsuk-grid-row nhsuk-c-promo-group">

  <div class="nhsuk-grid-column-one-half nhsuk-c-promo-group__item">

    <div class="nhsuk-c-promo">
      <a href="http://www.blood.co.uk/?utm_source=nhsc_hp_blood&amp;utm_medium=referral&amp;utm_content=web&amp;utm_campaign=partner">
        <img class="nhsuk-c-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png);" alt="">
        <div class="nhsuk-c-promo__content">
          <h3 class="nhsuk-c-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-c-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>

  </div>

  <div class="nhsuk-grid-column-one-half nhsuk-c-promo-group__item">

    <div class="nhsuk-c-promo">
      <a href="http://www.blood.co.uk/?utm_source=nhsc_hp_blood&amp;utm_medium=referral&amp;utm_content=web&amp;utm_campaign=partner">
        <img class="nhsuk-c-promo__img" src="https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png);" alt="">
        <div class="nhsuk-c-promo__content">
          <h3 class="nhsuk-c-promo__heading">Save a life: give blood</h3>
          <p class="nhsuk-c-promo__description">Please register today. Donating blood is easy, and saves lives.</p>
        </div>
      </a>
    </div>

  </div>

</div>
```

## Nunjucks macro

```html
<div class="nhsuk-grid-row nhsuk-c-promo-group">

  <div class="nhsuk-grid-column-one-half nhsuk-c-promo-group__item">

    {{ promo({
      "href": "#",
      "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}

  </div>

  <div class="nhsuk-grid-column-one-half nhsuk-c-promo-group__item">

    {{ promo({
      "href": "#",
      "imgURL": "https://www.nhs.uk/static/nhsuk_shared/img/homepage/give-blood.png",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}

  </div>
  
</div>
```
