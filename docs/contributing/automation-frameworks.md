# Contributing to the automation frameworks


## This document serves as a guide in contributing tests to the existing automation frameworks - Cypress and BackstopJS

For accepting the merge, we are following some rules/ check list. As a part of it every component should html markup as it considerd as an Acceptance Criteria for the test frameworks we are using - Cypress and BackstopJS.

### **1.Tests and the folder structure:**  
All the tests are need to be written in [TESTS folder](https://github.com/nhsuk/nhsuk-frontend/tree/master/tests). There are separate folders for [BackstopJS](https://github.com/garris/BackstopJS) and [Cypress](https://www.cypress.io/) tests. 

#### **1.1.Cypress:** 
This is an automation framework that we are using to check aria attributes, class names, background colour and the font for the components that we are developing. Using this framework, we have developed confidence on certain areas of accessibility (like Visual and audible – by checking the aria attributes) and some functional tests.

#### **1.1.1.Working with Cypress:** 

#### **1.1.2.Installation:**  
If you have cloned the project, and now you will have cypress dependencies installed. Any further issues, there is a step by step guide on [Cypress Page](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

#### **1.1.3.Running tests:** 

•	You can run the tests in two ways

#### **A.Using dashboard:** 

*	Invoke local host from on port 3000 by pointing terminal to  [test folder](https://github.com/nhsuk/nhsuk-frontend/tree/master/tests) in the nhsuk_frontend. 
*	Open Cypress dashboard by typing “npx cypress open”..
*	Click on any test to run on a browser.

#### **B.Using Command line:** 
*	Type “npm run cypress_ci_tests” to run only the cypress tests.
*	 Type “npm run test” in the terminal to run tests from all the frameworks.


#### **1.1.4.Contributing:** 
As mentioned earlier having mark-up for each component is mandatory, The Cypress tests should check for aria attributes, class names and if the component has any click, text entry, date setting then functional tests should be written for them. We are more focused on integration folder, as this folder has Cypress tests for all the components. Any updating or adding new tests should be done based on the naming convention we follow.

#### **1.1.5.Naming convention for Test Suite and Tests**
#### **A.Naming the test suite:**  

Here, the name of the test suite is same as the name of the name of the component. 

#### **B.Naming the tests:** 

We are aiming to have the test description of any tests to be more non-technical

#### **Ex:** 

```js
it('To see whether it has a circle with right arrow', function () {

  cy.get('.nhsuk-action-link__link').children().should('have.class','nhsuk-icon nhsuk-icon__arrow-right-circle')
  
  });
```

In the above example, the test has more non-technical description – text To see whether it has a circle with right arrow describes the test. It is a test for checking the class “'nhsuk-icon nhsuk-icon__arrow-right-circle” exists in the component.

### **1.2.BackstopJS:**
It is a boilerplate framework, used to check the webpage against all different viewpoints. With this framework we have gained confidence about the responsiveness of the webpage.

#### **1.2.1.Working with BackstopJS:** 
This involves installing and contributing to the framework. 

#### **1.2.2.Installing:** 
Now that you have installed all the dependencies, if you have any further issues in using framework try installing BackstopJS based on the guidelines provided by BackstopJS

#### **1.2.3.Contributing:**
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

### **2.Reference:**
*	Cypress installation page - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements.
*	BackstopJS installation page - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
*	List of devices and the browsers that we are supporting  - https://github.com/nhsuk/nhsuk-frontend/blob/master/docs/contributing/testing.md
