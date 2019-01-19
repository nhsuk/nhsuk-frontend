# Images

To discuss or contribute to this component, visit the [GitHub issue for this component](https://github.com/nhsuk/nhsuk-frontend/issues/171).

## Quick start examples

### Images

[Preview the images component](https://nhsuk.github.io/nhsuk-frontend/components/images/index.html)

### HTML markup

```html
<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis"/>
  <figcaption class="nhsuk-image__caption">
    Itchy, red, watering eyes
  </figcaption>
</figure>
<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg" alt="Picture of allergic conjunctivitis"/>
</figure>
```

### Nunjucks macro

```
{% from 'components/images/macro.njk' import image %}

{{ image({
  "alt": "Picture of allergic conjunctivitis",
  "src": "https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg",
  "caption": "Itchy, red, watering eyes"
}) }}
```
