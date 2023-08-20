
const express = require('express');
const Subscribers = require('./models/subscribers');

const app = express()




app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscribers.find();
    res.send(subscribers);
  } catch (error) {
    res.status(500).send('Error fetching subscribers');
  }
});

  app.get('/subscribers/names', async (req, res) => {
    try {
      const subscribers = await Subscribers.find({}, 'name subscribedChannel');
  
      const subscriberData = subscribers.map(subscriber => ({
        name: subscriber.name,
        channel: subscriber.subscribedChannel
      }));
  
      res.send(subscriberData);
    } catch (error) {
      res.status(500).send('Error fetching subscribers');
    }
  });
  


  app.get('/subscribers/:id', async (req, res) => {
    try {
      const subscriber = await Subscribers.findById(req.params.id);
        
      subscriber&&
        res.send({ subscriber});
      
    } catch (error) {
      res.status(400).send('message:'+error.message);
    }
  });
  





















module.exports = app;
