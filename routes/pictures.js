const express = require('express')
const router = express.Router()

const apiControllers = require('../controllers/apiControllers')

router.get('/', apiControllers.apiControllers_index)
router.get('/all', apiControllers.apiControllers_all)

module.exports = router