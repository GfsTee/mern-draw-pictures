const express = require('express')
const router = express.Router()

const apiControllers = require('../controllers/apiControllers')

router.get('/', apiControllers.apiControllers_index)
router.get('/all', apiControllers.apiControllers_all)
router.post('/add', apiControllers.apiControllers_add_post)
router.get('/item/:id', apiControllers.apiControllers_item_get)
router.put('/item/:id', apiControllers.apiControllers_item_edit)

module.exports = router