// var connection = require('../../lib/db');
const express = require('express');

const router = express.Router();
const sequelizeORM = require('../sequelize/index');

const model = sequelizeORM.Model;

const userModel = require('../../models/users')(sequelizeORM.Sequelize, model, sequelizeORM.sequelize);
const customersDao = require('../../models/dataAccessLayer')(userModel);

router.get('/getAll', async (req, res) => {
  const customers = await customersDao.getRows();
  res.send(customers);
});

router.get('/findOne', async (req, res) => {
  let customer = await customersDao.getSingleRow(req.query.id);
  customer = customer != null ? customer : {};
  res.send(customer);
});

router.post('/saveRow', async (req, res) => {
  const customerResult = await customersDao.saveRow(req.body);
  res.send(customerResult);
});

router.put('/updateRow', async (req, res) => {
  const customerResult = await customersDao.updateRow(req.body, { where: { id: req.body.id } });
  res.send(customerResult);
});

router.delete('/deleteRow', async (req, res) => {
  const customerResult = await customersDao.deleteRow({ where: { id: req.body.id } });
  res.send(customerResult);
});

module.exports = {
  router,
};
