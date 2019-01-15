# Contributing to the automation frameworks

This document serves as a guide in contributing tests to the existing automation frameworks - Cypress and BackstopJS.

Every new component should have tests, as defined in the acceptance criteria for merge requests.

## 1.Tests and the folder structure
All tests should go into the [tests directory](https://github.com/nhsuk/nhsuk-frontend/tree/master/tests). There are separate directories for [BackstopJS](https://github.com/garris/BackstopJS) and [Cypress](https://www.cypress.io/) tests.

### 1.1.Cypress
Cypress is an automation framework that we are using to check aria attributes, class names, background colour and the font for the components that we have created. Using this framework, we have developed confidence on certain areas of accessibility (like Visual and audible – by checking the aria attributes) and some functional tests.

#### 1.1.1.Installation
If you have cloned the project and run `npm install`, you will have cypress dependencies installed. For any further issues, there is a step by step guide on [Cypress Page](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

#### 1.1.2.Running tests

You can run the tests in two ways:

##### Using the Cypress dashboard

*	Start a server on localhost port 3000 by opening a terminal in the [tests directory](https://github.com/nhsuk/nhsuk-frontend/tree/master/tests).
*	Open the Cypress dashboard by running `npx cypress open` in your terminal.
*	Click on any test to run on a browser.

##### Using the Command line 
*	Run `npm run cypress_ci_tests` to run only the cypress tests.
*	Run `npm run test` in the terminal to run tests from all the frameworks.


#### 1.1.4.Contributing
The Cypress tests should check for aria attributes, class names and if the component has any click, text entry, date setting then functional tests should be written for them. We are more focused on integration folder, as this folder has Cypress tests for all the components. Any updating or adding new tests should be done based on the naming convention we follow.

#### 1.1.5.Naming convention for Test Suite and Tests

The name of the test suite should be the same as the component name.

We aim to have non-technical descriptions in our tests

Example:

```js
it('To see whether it has a circle with right arrow', function () {

  cy.get('.nhsuk-action-link__link').children().should('have.class','nhsuk-icon nhsuk-icon__arrow-right-circle')
  
  });
```

In the above example, the test has a non-technical description - *To see whether it has a circle with right arrow* describes the test.
The test checks that the class `nhsuk-icon nhsuk-icon__arrow-right-circle` exists in the component.

### 1.2.BackstopJS
BackstopJS is a framework used to check changes in webpages at different viewports.

#### 1.2.1.Working with BackstopJS

#### 1.2.2.Installing
Now that you have installed all the dependencies, if you have any further issues in using framework try installing BackstopJS based on the guidelines provided by BackstopJS

#### 1.2.3.Contributing
For every new component that gets added, the backstop.json file should be updated with the following information.

*	Label: Should have easy readable description for the test, we are consider having it as a name of the component.
* *Ex: “Action Link” for an action link component*
*	URL: should be localhost:3000 along with name of the component
* *Ex: "url": "http://localhost:3000/components/do-dont-list.html*
* For any component that has click action, then “ClickSelector” need to be updated.
 
```html
    "label": "Expander group",
    "url": "http://localhost:3000/components/expander-group.html",
    "clickSelector": ".nhsuk-details__summary"
```

### 2.Reference
*	Cypress installation page - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements.
*	BackstopJS installation page - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
*	List of devices and the browsers that we are supporting  - https://github.com/nhsuk/nhsuk-frontend/blob/master/docs/contributing/testing.md
