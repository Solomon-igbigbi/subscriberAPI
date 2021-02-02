const Subscriber = require('../models/subscriber')

exports.subscriber = async (req, res, next) => {
    console.log(req.params.id)
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(!subscriber) return res.status(401).json({ message: 'subscriber not found'});
    } catch(err) {
        return res.status(400).json({ message: 'subscriber not found'});
    }

    res.subscriber = subscriber;
    next();
}

