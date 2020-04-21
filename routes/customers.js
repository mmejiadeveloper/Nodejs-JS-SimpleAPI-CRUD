/* const express = require('express');

const router = express.Router();
const connection = require('../lib/db');


router.get('/', (req, res) => {
  connection.query('SELECT * FROM customers ORDER BY id desc', (err, rows) => {
    if (err) {
      req.flash('error', err);
      res.render('customers', { page_title: 'Customers - Node.js', data: '' });
    } else {
      res.render('customers', { page_title: 'Customers - Node.js', data: rows });
    }
  });
});


// SHOW ADD USER FORM
router.get('/add', (req, res) => {
  // render to views/user/add.ejs
  res.render('customers/add', {
    title: 'Add New Customers',
    name: '',
    email: '',
  });
});

// ADD NEW USER POST ACTION
router.post('/add', (req, res) => {
  req.assert('name', 'Name is required').notEmpty(); // Validate name
  req.assert('email', 'A valid email is required').isEmail(); // Validate email

  const errors = req.validationErrors();

  if (!errors) { // No errors were found.  Passed Validation!
    const user = {
      name: req.sanitize('name').escape().trim(),
      email: req.sanitize('email').escape().trim(),
    };

    connection.query('INSERT INTO customers SET ?', user, (err) => {
      // if(err) throw err
      if (err) {
        req.flash('error', err);

        // render to views/user/add.ejs
        res.render('customers/add', {
          title: 'Add New Customer',
          name: user.name,
          email: user.email,
        });
      } else {
        req.flash('success', 'Data added successfully!');
        res.redirect('/customers');
      }
    });
  } else { // Display errors to user
    let error_msg = '';
    errors.forEach((error) => {
      error_msg += `${error.msg}<br>`;
    });
    req.flash('error', error_msg);


    res.render('customers/add', {
      title: 'Add New Customer',
      name: req.body.name,
      email: req.body.email,
    });
  }
});

// SHOW EDIT USER FORM
router.get('/edit/(:id)', (req, res, next) => {
  connection.query(`SELECT * FROM customers WHERE id = ${req.params.id}`, (err, rows, fields) => {
    if (err) throw err;

    // if user not found
    if (rows.length <= 0) {
      req.flash('error', `Customers not found with id = ${req.params.id}`);
      res.redirect('/customers');
    } else { // if user found
      // render to views/user/edit.ejs template file
      res.render('customers/edit', {
        title: 'Edit Customer',
        // data: rows[0],
        id: rows[0].id,
        name: rows[0].name,
        email: rows[0].email,
      });
    }
  });
});

// EDIT USER POST ACTION
router.post('/update/:id', (req, res, next) => {
  req.assert('name', 'Name is required').notEmpty(); // Validate nam           //Validate age
  req.assert('email', 'A valid email is required').isEmail(); // Validate email

  const errors = req.validationErrors();

  if (!errors) {
    const user = {
      name: req.sanitize('name').escape().trim(),
      email: req.sanitize('email').escape().trim(),
    };

    connection.query(`UPDATE customers SET ? WHERE id = ${req.params.id}`, user, (err, result) => {
      // if(err) throw err
      if (err) {
        req.flash('error', err);

        // render to views/user/add.ejs
        res.render('customers/edit', {
          title: 'Edit Customer',
          id: req.params.id,
          name: req.body.name,
          email: req.body.email,
        });
      } else {
        req.flash('success', 'Data updated successfully!');
        res.redirect('/customers');
      }
    });
  } else { // Display errors to user
    let error_msg = '';
    errors.forEach((error) => {
      error_msg += `${error.msg}<br>`;
    });
    req.flash('error', error_msg);

    res.render('customers/edit', {
      title: 'Edit Customer',
      id: req.params.id,
      name: req.body.name,
      email: req.body.email,
    });
  }
});

// DELETE USER
router.get('/delete/(:id)', (req, res, next) => {
  const user = { id: req.params.id };

  connection.query(`DELETE FROM customers WHERE id = ${req.params.id}`, user, (err, result) => {
    // if(err) throw err
    if (err) {
      req.flash('error', err);
      // redirect to users list page
      res.redirect('/customers');
    } else {
      req.flash('success', `Customer deleted successfully! id = ${req.params.id}`);
      // redirect to users list page
      res.redirect('/customers');
    }
  });
});


module.exports = router;
 */
