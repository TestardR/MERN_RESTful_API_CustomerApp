const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const CustomerSchema = new Schema({
  lastName: {
    type: String
  }
});

//create model for todo
const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer;
