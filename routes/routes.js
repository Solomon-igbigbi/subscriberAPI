const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainControllers')
const getSubscriber = require('../middleware/getSubscriber')


router.get("/",  mainController.subscribers);
router.get("/:id", getSubscriber.subscriber, mainController.subscriber);
router.post("/",  mainController.registerSubscriber);
router.delete("/:id", getSubscriber.subscriber, mainController.deleteSubscriber);
router.patch("/:id", getSubscriber.subscriber, mainController.updateSubscriber);

module.exports = router