import DS from "ember-data";

export default class Customer extends DS.Model.extend({}) {
  // normal class body definition here
}

declare module "ember-data/types/registries/model" {
  export default interface ModelRegistry {
    customer: Customer;
  }
}
