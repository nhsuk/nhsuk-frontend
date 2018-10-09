# Cookie banner

## Introduction

## Guidance

Find out when to use the cookie banner component in the [Digital service manual]().

## Example

[Preview the cookie banner component]()

#### Markup

    <div class="nhsuk-cookie-banner" id="nhsuk-cookie-banner" lang="[#LANGUAGE#]" dir="[#TEXTDIRECTION#]" role="alert" ng-non-bindable="">
      <div class="nhsuk-width-container" id="nhsuk-cookie-banner__info">
        <div class="nhsuk-grid-row">
          <div class="nhsuk-grid-column-two-thirds">
            <h2 class="nhsuk-heading-m">This website uses cookies</h2>
            <!-- <h2>[#TITLE#]</h2> -->
            <p>We use files called '<a href="#">cookies</a>' across our websites. Some are essential. For others you have a choice. Find out <a href="#">which cookies we use and why</a>.</p>
            <form class="nhsuk-form">
              <legend class="visually-hidden">Cookies you are happy for us to use:</legend>
              <div id="CybotCookiebotDialogBodyLevelButtonsSelectPane">
                <div class="nhsuk-form__wrapper visually-hidden CybotCookiebotDialogBodyLevelButtonWrapper" title="Mandatory - can not be deselected.">
                  <input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonNecessary" class="multiple-choice--checkbox checkbox-blue CybotCookiebotDialogBodyLevelButtonDisabled" disabled="disabled" checked="checked">
                  <label for="CybotCookiebotDialogBodyLevelButtonNecessary">
                    Required
                    <!-- [#COOKIETYPE_NECESSARY_RAW#] -->
                  </label>
                </div>
                <div class="nhsuk-form__wrapper CybotCookiebotDialogBodyLevelButtonWrapper" title="These types of cookies remember the notifications you’ve seen so that we don’t show them to you again.">
                  <input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonPreferences" class="multiple-choice--checkbox checkbox-blue" checked="checked">
                  <label for="CybotCookiebotDialogBodyLevelButtonPreferences">
                    Site preferences
                    <!-- [#COOKIETYPE_PREFERENCE_RAW#] -->
                  </label>
                </div>
                <div class="nhsuk-form__wrapper CybotCookiebotDialogBodyLevelButtonWrapper" title="These types of cookies measure how you use the website, like where you click, so it can be updated and improved based on your needs.">
                  <input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonStatistics" class="multiple-choice--checkbox checkbox-blue" checked="checked">
                  <label for="CybotCookiebotDialogBodyLevelButtonStatistics">
                    Website usage
                    <!-- [#COOKIETYPE_STATISTICS_RAW#] -->
                  </label>
                </div>
                <div class="nhsuk-form__wrapper CybotCookiebotDialogBodyLevelButtonWrapper" title="We run health awareness campaigns with trusted partners. These cookies see how they perform across the internet and social media. Such as whether you clicked an advert to come to our site.">
                  <input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonMarketing" class="multiple-choice--checkbox checkbox-blue">
                  <label for="CybotCookiebotDialogBodyLevelButtonMarketing">
                    Health campaigns
                    <!-- [#COOKIETYPE_ADVERTISING_RAW#] -->
                  </label>
                </div>
              </div>
            </form>

            <a href="javascript:void(0)" onclick="hideCookieBanner()" class="nhsuk-cookie-banner__button" role="button">
              Agree and continue
              <!-- [#ACCEPT#] -->
            </a>
          </div>
        </div>
      </div>
    </div>


#### Macro

    {% from 'components/cookie-banner/macro.njk' import cookieBanner %}

    {{ cookieBanner() }}

## Contribution

Guidelines on contributing to components can be found at [Contributing guidelines]().
