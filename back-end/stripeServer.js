const express = require('express');
const app = express();
const [testKey,stripe,express] = [require('./stripeAPIkey'), require('stripe')(testKey), require('express')];

app.use(express.static('public'));
app.use(express.json());

const calculateOderAmount = (items)=> items.reduce((sum, curVal)=> sum + curVal);
app.post('/create-payment-intent', async (request, response)=> {
  const {items} = request.body;

  //Create a PaymentINtent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOderAmount(items),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    }
  });

  response.send({
    clientSecret: paymentIntent.client_secret,
  })
})
const testKey = require('./stripe')
const process = require('dotenv').config()
const PORT = process.env.PORT
app.listen(PORT,()=> `💵 Listening on port ${PORT}`)