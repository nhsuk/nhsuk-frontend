
# Component API definition and use
We have chosen as Nunjucks as the templating language for NHS.UK Frontend components. We expose those templates as reusable chunks of code: macros. Developers import macros into their application, call them as per documentation and provide data to its arguments.

To provide a level of consistency for developers we have standardised argument names, their expected input, use and placement. There are expectations, and  if so they are documented accordingly.

## Specifying content
When providing *content* to a macro, say for a label or a button, we accept two argument options:

 - `text` accepts a plain string and is the default way of passing content
 - `html` accepts html markup. In the template we will not escape html so it will be rendered. In a scenario where both text and html are set, html argument will take precedence over text.

Example:

```
{{ insetText({
  "text": "You'll need to stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
}) }}
```

```
{{ insetText({
  "HTML": "<p>If you drive you must tell the <a href='https://www.gov.uk/contact-the-dvla/' title='External website'>DVLA</a> about your vertigo. Visit the GOV.UK website for more information on <a href='https://www.gov.uk/dizziness-and-driving' title='External website'>driving with vertigo</a></p>"
}) }}
```

Example of implementing logic in a component template:

`{{ params.html | safe if params.html else params.text }}`

Example shows that if `html` and `text` arguments are present, then `html` takes precedence over `text` and we are not escaping it.

## Naming attributes
We should use **camelCase** for naming attributes.

## Specifying multiple items
When a component accepts a *single array of items* for an output, such as checkboxes or radios, we accept an ***"items"*** array of objects.  Table component is an exception is it can contain multiple array for rows, head, footer where there is need to for more specific names.

Example:
```
{{ listPanel({
  items: [
    {
      URL: "/aaa",
      link: "AAA"
    },
    {
      URL: "/abdominal",
      link: "Abdominal aortic aneurysm"
    },
    {
      URL: "/abscess",
      link: "Abscess"
    }
  ]
}) }}
```
## Use of classes to specify variants
When a component has multiple visual presentations, such as the care cards, we make use of classes argument to differentiate between them.

Care card non-urgent (blue) example:
```
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
Care card emergency (red and black) example:
```
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
