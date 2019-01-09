As a part of accepting the merge, we are following some rules/ check list. As a part of it we have Cypress and BackstopJS to do some tests against functional and accessibility. It is mandatory that the newly developed component should have a mark-up (HTML template) and should have tests against the mark-up.

####1.Tests and the folder structure:  
All the tests are need to be written in TESTS folder. There are separate folders for **[BackstopJS](https://github.com/garris/BackstopJS)** and **[Cypress](https://www.cypress.io/)** tests. 

**1.1Cypress:** This is an automation framework that we are using to check aria attributes, class names, background colour and the font for the components that we are developing. Using this framework, we have developed confidence on certain areas of accessibility (like Visual and audible – by checking the aria attributes) and some functional tests.

#####1.1.1.Working with Cypress: 

#####1.1.2.Installation:  
Assuming that you have cloned the project, and now you have cypress dependencies installed. If you have any issues installing the Cypress, there is a step by step guide on [Cypress Page](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

#####1.1.3.Running tests: 

•	You can run the tests in two ways

##### 1.1.4.Using dashboard: 

*	Have you terminal pointing to the [test folder](https://github.com/nhsuk/nhsuk-frontend/tree/master/tests) in the nhsuk_frontend. 
*	Invoke local host by typing “npm start” in the terminal.
*	In the terminal type “npx cypress open”. This will invoke a dashboard pointing to integration folder where the tests exists.
*	Clicking on any test will invoke a browser and the tests will run and can be viewed.

#####1.1.5.Using Command line: 
By typing “npm run cypress_ci_tests” will run only the cypress tests. Once the tests are been updated then “npm run test” is used this will run all the tests.

#####1.1.5.Contributing: 
As mentioned earlier that it is mandatory to have mark-up for each component, The Cypress tests should check for the existence of aria attributes, class names and if the component has any click, text entry, date setting then functional tests should be written for them. While contributing, naming tests and naming the test suite are more crucial.
When using it for the nhsuk frontend library we are more focused on the integration folder. This is the folder that has all the tests for the components that we are developing. For any contribution the tests needed to be updated.

#####1.1.6.Naming the test suite:  

Here, the name of the test suite is same as the name of the sub folder (i.e. the name of the component) in the packages > components folder.



#####1.1.7Naming the tests: 

We are aiming to have the test description of the tests to be more non-technical.  

#####Ex: 

```html
it('To see whether it has a circle with right arrow', function () {

  cy.get('.nhsuk-action-link__link').children().should('have.class','nhsuk-icon nhsuk-icon__arrow-right-circle')
  
  });
```

In the example, the test has more non-technical description – text in bold. The test is for checking whether there is a class named “'nhsuk-icon nhsuk-icon__arrow-right-circle”.

#####1.2.BackstopJS:
 This is a boilerplate framework that is used to check the webpage against all different viewpoints. Using this framework, we gained confidence in terms of responsiveness of the web page.

#####1.2.1.Working with BackstopJS: 
This involves installing and contributing to the framework. 

#####1.2.2.Installing: 
At this stage you have installed all the dependencies, but if you have issues in using BackstopJS. Try installing by typing “npm install Backstopjs”, if there are further issues consider looking into the guidelines that BackstopJS has framed.

#####1.2.3.Contributing:
 When there is any new component added, then backstop.json file need to be updated with the following information.
*	Label: should have a easy readable description about the component 
*	Ex:  “Action Link” for an action link component
*	URL: should only have a localhost:3000 in it
*	If the component has any click action, then “ClickSelector” need to be updated.
*	Ex: 
```html
    "label": "Expander group",
    "url": "http://localhost:3000/components/expander-group.html",
    "clickSelector": ".nhsuk-details__summary"
```

#####2.Reference:
*	Cypress installation page - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements.
*	BackstopJS installation page - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
*	List of devices and the browsers that we are supporting  - https://github.com/nhsuk/nhsuk-frontend/blob/master/docs/contributing/testing.md
