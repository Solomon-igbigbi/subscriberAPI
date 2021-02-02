const Subscriber = require('../models/subscriber')

// get all subscriber
exports.subscribers =  async (req, res) => {
    try {
        const subscriber = await Subscriber.find()
        res.json(subscriber)
    } catch(ex) {
        res.status(500).json({ message: ex.message});
    }
}

//get one subscriber by the ID
exports.subscriber =  (req, res) => {
    res.status(200).json(res.subscriber);
},


//register a subscriber
exports.registerSubscriber =  async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try {
        let newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber)
    } catch(err) {
        res.status(400).json({message: err.messgae})
    }
};


// delete a subscriber
exports.deleteSubscriber =  async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({ message: "Deleted the  user"})
    } catch(err) {
        res.json({ message: err.message})
    }
}

// update a subscriber
exports.updateSubscriber =  async (req, res) => {
    if(req.body.name != null) res.subscriber.name = req.body.name;
    if(req.body.subscribedToChannel != null) res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    try {
        let updatedUser = await res.subscriber.save()
        res.json(updatedUser)
    } catch(err) {
        res.status(400).json({ message: err.messgae })
    }
}
