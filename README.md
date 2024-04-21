# ros

Restaurant Ordering System.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember.js](https://guides.emberjs.com)
- [LoopBack](http://loopback.io)
- [PostgreSQL](https://www.postgresql.org)
- [Google Chrome](https://google.com/chrome/)

## Current Versions

- ember-cli: 3.28.6
- loopback: 3.22.0
- node: 16.20.2
- PostgreSQL 14.11

## Installation

- `git clone <repository-url>` this repository
- `cd ros`
- `cd frontend`
- `npm install`
- `cd ..`
- `cd backend`
- `cd loopback3`
- `npm install`

<!-- ## PostgreSQL Tables

* `CREATE TABLE public.customer (
    id int4 GENERATED ALWAYS AS IDENTITY NOT NULL,
    username varchar NOT NULL,
    pwd varchar NOT NULL
  )`

* `CREATE TABLE public.item (
  	id int4 GENERATED ALWAYS AS IDENTITY NOT NULL,
    item_name varchar NOT NULL,
    price int4 DEFAULT 1 NOT NULL
  )`

* `CREATE TABLE public."order" (
    id int GENERATED ALWAYS AS IDENTITY NOT NULL,
    customer_id int NOT NULL,
    order_date date NOT NULL,
    total int NOT NULL
  )`

* `CREATE TABLE public.detail (
    id int GENERATED ALWAYS AS IDENTITY NOT NULL,
    order_id int NOT NULL,
    item_id int NOT NULL,
    qty int DEFAULT 1 NOT NULL,
    price int DEFAULT 1 NOT NULL,
    sub_total int DEFAULT 1 NOT NULL
  )` -->

## Running / Development Ember

- `cd frontend`
- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Running / Development Loopback

- `cd backend`
- `cd loopback3`
- `node .`
- Web server listening at [http://localhost:3000](http://localhost:3000).
- Browse your REST API at [http://localhost:3000/explorer](http://localhost:3000/explorer).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### Developer

- Created By: Endro
- Email: endro.mono9 @ gmail . com
- Created At: 2024-04-12
