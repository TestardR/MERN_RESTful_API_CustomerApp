const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

router.get('/customers', (req, res, next) => {
  //this will return all the data, exposing only the id and lastName field to the client
  Customer.find({}, 'lastName')
    .then(data => res.json(data))
    .catch(next);
});

router.post('/customers', (req, res, next) => {
  if (req.body.lastName) {
    Customer.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty'
    });
  }
});

router.delete('/customers/:id', (req, res, next) => {
  Customer.findOneAndDelete({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;
