var express = require('express');
var router = express.Router();
var requestPromise = require('request-promise');
var options = require('../conf.js');
var response;

/* GET users listing. */
router.get('/', function (req, res, next) {

    options.uri='https://content.guardianapis.com/world';

    requestPromise(options)
        .then(function (repos) {
            response = repos.response.results;
            res.send(response);
        })
        .catch(function (err) {
            // API call failed...
            response = 'Failed to get data';
            res.send(response);
    });
});

module.exports = router;
