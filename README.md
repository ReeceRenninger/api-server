LAB - Class 03
Project: Express Rest API
Author: Reece Renninger

Problem Domain

- Create an Express API with full CRUD functionality. Utilize Sequelize library on top of all of the previous lab tools.

Links and Resources

  [GitHub Actions ci/cd](https://github.com/ReeceRenninger/api-server)

  [back-end server url](https://basic-api-server-zdnm.onrender.com)

Collaborators

Setup

PORT env is setup, devs can set port to whatever they want

How to initialize/run your application (where applicable)

    clone repo to local machine, 
    npm init -y
    npm i jest, supertest, express, dotenv, sequelize, sqlite3, pg, sequelize-cli, cors, eslint
    You will need to have post gres set up locally to create your SQL db 
    create an index.js at root for access point
    spin up your psql or nodemon to check server status

How to use your library (where applicable)
Features / Routes

    GET : / - proof of life route

Tests

    npm test (specific tests can be targeted)
    Any tests of note?
    Describe any tests that you did not complete, skipped, etc

UML

![UML of sql server setup](./assets/basic-sql-server-uml.png)