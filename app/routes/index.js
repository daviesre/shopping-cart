import Ember from 'ember';

var items = [{
  name: "Onion",
  price: 3,
}, {
  name: "Raddish",
  price: 2,
}, {
  name: "Eggplant",
  price: 5,
}, {
  name: "Parsnip",
  price: 2.5,
}, {
  name: "Cranberry",
  price: 8,
}, {
  name: "Quartz",
  price: 12,
}, {
  name: "Copper Pickaxe",
  price: 2000,
}];

export default Ember.Route.extend({
  model() {
    return items;
  }
});
