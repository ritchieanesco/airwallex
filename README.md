# Broccoli & Co Invitation

Solution for FED code test by Ritchie Anesco.

## Tech Stack

* React
* Jest
* Webpack
* Material-UI
* Axios

## Dev Setup

In order to review this code test there are a couple of things you need and some steps you need to follow.

### Dependencies

* Node v9.9.0
* NPM v5.6.0

### Getting started

1.  Run `yarn install`
2.  Run `yarn start`
3.  View app in browser `http://localhost:8080`

## Solution Notes

**Components**

Reusable React components

* Stateless (Preferred): Used to simply receive props and render on page
* Stateful: Only used when additional state management or lifecycle methods are required (otherwise build Stateless components)

**Test**

Jest screenshot and unit tests are provided in the same location as the file being tested with a .test suffix.

(eg: `App/Utils/form.test.js`).

**Utils**

Reusable helper functions that can be imported into tests, other functions or React components. Makes testing easier.
