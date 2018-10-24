# Warning callout

Find out more about the warning callout component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## Example

[Preview the fwarning callout component]()

## HTML markup

    <div class="nhsuk-c-warning-callout">
      <h3 class="nhsuk-c-warning-callout__heading-tab">Important</h3>
      <p>If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help.</p>
    </div>

## Nunjucks macro

    {% from 'components/warning-callout/macro.njk' import warningCallout %}

    {{ warningCallout({
      "heading": "Important",
      "HTML": "<p>If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help.</p>"
    }) }}
