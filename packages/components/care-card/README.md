# Care cards

Find out more about the care card component and when to use it in the [NHS digital service manual](https://beta.nhs.uk/service-manual/).

## 111 Care card example

[Preview the 111 care card component]()

## 111 Care card HTML markup

    <div class="nhsuk-care-card nhsuk-care-card--grey">
      <div class="nhsuk-care-card__heading-container">
        <h3 class="nhsuk-care-card__heading"><span class="nhsuk-u-visually-hidden">Non-urgent advice: </span>Call 111</h3>
      </div>
      <div class="nhsuk-care-card__content">
        <p>If you can't speak to your GP and don't know what to do next.</p>
      </div>
    </div>

## 111 Care card nunjucks macro

    {% from 'components/care-card/macro.njk' import careCard %}

    {{ careCard({
      "class": "grey",
      "heading": "Call 111",
      "HTML": "<p>If you can't speak to your GP and don't know what to do next.</p>"
    }) }}

## Primary Care card example

[Preview the primary care card component]()

#### Markup

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

#### Macro

    {% from 'components/care-card/macro.njk' import careCard %}

    {{ careCard({
      "class": "blue",
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

### Urgent Care card

[Preview the urgent care card component]()

#### Markup

    <div class="nhsuk-care-card nhsuk-care-card--red">
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

#### Macro

    {% from 'components/care-card/macro.njk' import careCard %}

    {{ careCard({
      "class": "red",
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

### Emergency Care card

[Preview the emergency care card component]()

#### Markup

    <div class="nhsuk-care-card nhsuk-care-card--black">
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

#### Macro

    {% from 'components/care-card/macro.njk' import careCard %}

    {{ careCard({
      "class": "black",
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
