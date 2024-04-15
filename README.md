# ros

 Restaurant Ordering System.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [EmberJS](https://guides.emberjs.com)
* [LoopBack](http://loopback.io)
* [PostgreSQL](https://www.postgresql.org)
* [Google Chrome](https://google.com/chrome/)

## Current Versions
* ember-cli: 3.28.6
* loopback: 3.22.0
* node: 16.20.2
* PostgreSQL 14.11

## Installation

* `git clone <repository-url>` this repository
* `cd ros`
* `npm install`

## PostgreSQL Tables 

* `CREATE TABLE public.customer (
    id int GENERATED ALWAYS AS IDENTITY NOT NULL,
    username varchar NOT NULL,
    "password" varchar NOT NULL
  )`
 
## Running / Development Ember

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Running / Development Loopback

* `cd lb-ros`
* `node .`
* Web server listening at [http://localhost:3000](http://localhost:3000).
* Browse your REST API at [http://localhost:3000/explorer](http://localhost:3000/explorer).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### Developer
*  Created By: Endro 
*  Email: endro.mono9 @ gmail . com
*  Created At: 2024-04-12