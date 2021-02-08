const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainControllers')
const Subscriber  = require('../middleware/getSubscriber')


router.get("/",  mainController.subscribers);
router.get("/:id", Subscriber.validateSubscriber, mainController.subscriber);
router.post("/",  mainController.registerSubscriber);
router.delete("/:id", Subscriber.validateSubscriber, mainController.deleteSubscriber);
router.patch("/:id", Subscriber.validateSubscriber, mainController.updateSubscriber);

module.exports = router