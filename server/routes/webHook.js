const express = require('express')
const router = express.Router();
const chatFacebookController = require('../controllers/ChatFacebookController')

router.post('/webhook', chatFacebookController.postWebhook)
router.get('/webhook', chatFacebookController.getWebhook)


module.exports = router

