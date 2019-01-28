# Contributing to the BackstopJS framework

This document serves as a guide in contributing tests to the existing BackstopJS framework

Every new component should have tests and the guideline as below 

## 1.Tests and the folder structure
All tests should go into the [tests directory](https://github.com/nhsuk/nhsuk-frontend/tree/master/tests). There are separate directory for [BackstopJS](https://github.com/garris/BackstopJS) tests.


### 1.2.BackstopJS
BackstopJS is a framework used to check changes in webpages at different viewports.

#### 1.2.1.Working with BackstopJS

#### 1.2.2.Installing
Now that you have installed all the dependencies, if you have any further issues in using framework try installing BackstopJS based on the guidelines provided by BackstopJS

#### 1.2.3.Contributing
For every new component that gets added, the backstop.json file should be updated with the following information.

*	Label: Should have easy readable description for the test, we are consider having it as a name of the component.
* *Ex: “Action Link” for an action link component*
*	URL: should be base-app:3000 along with name of the component
* *Ex: "url": "http://base-app:3000/components/do-dont-list.html*
* For any component that has click action, then “ClickSelector” need to be updated.
 
```html
    "label": "Expander group",
    "url": "http://base-app:3000/components/expander-group.html",
    "clickSelector": ".nhsuk-details__summary"
```

As the backstopJS tests are running in docker, the following command can be used to take reference images and test the component.

#### 1.2.4.Commands
* For capturing reference images of the components

"docker-compose run backstop reference" should be used in terminal that is pointing to the project location

* For running tests on the components

"docker-compose run backstop test" should be used in terminal that is pointing to the project location

### 2.Reference

*	BackstopJS installation page - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
*	List of devices and the browsers that we are supporting  - https://github.com/nhsuk/nhsuk-frontend/blob/master/docs/contributing/manual_testing.md
* BackstopJS docker image - https://hub.docker.com/r/backstopjs/backstopjs/
