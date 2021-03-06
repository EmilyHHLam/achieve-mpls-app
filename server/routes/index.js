//base Modules
var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/user',
        failureRedirect: '/'
    })
);

// Handle index file
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  console.log("request for index");
  console.log("+++++++++++++++++++++++++++++req.user.role in index.js: ", req.user, req.body);
  // if (req.data.role === )
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});


module.exports = router;
