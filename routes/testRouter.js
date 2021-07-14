const express = require('express');
const testController = require('../controllers/testController');
const router = express.Router();

router.get('/', 
  testController.loopThrough100, 
  testController.runThroughFizzBuzz,
  (req, res) => res.send(JSON.stringify(res.locals.data))
)

module.exports = router