var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('My deployment github repository can be found at https://github.com/helenau1/DeployToAzure');
});

module.exports = router;