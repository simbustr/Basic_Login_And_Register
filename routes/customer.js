const express = require('express')
const router = express.Router()
const customer = require('../controller/customer')

router.get('/',customer.getAllCustomer)
router.post('/',customer.addCustomer)
router.delete('/:id',customer.deleteCustomer)


module.exports = router