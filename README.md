# Demo-Heroku-Mean-App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##
## Heroku Setup
##

## Heroku Prerequisites

[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

[Node.js](https://nodejs.org/en/download/) version 4 or higher already installed if Angular CLI is up-to-date

**bash**
$ heroku create

Generates your app and git repository in Heroku

## Heroku Provision a MongoDB

We’ll use the mLab add-on, a fully managed MongoDB service, to easily provision a new MongoDB database. You will need to verify your account and enter a credit card to create it.

**bash**
$ heroku addons:create mongolab

The database connection URI is stored as a config var. (process.env.MONGODB_URI)

## Connect MongoDB and the app server using the Node.js driver **included**

We'll use the official Node.js driver

**bash**
$ touch server.js

Note: Another option is to use an object document mapper called Mongoose that wraps the Node.js driver (similar to a SQL ORM)