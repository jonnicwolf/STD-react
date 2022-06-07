// // This is your test secret API key.

// const testKey = require('./stripeAPIkey');
// const stripe = require('stripe')(testKey);
// const express = require('express');
// const app = express();
// app.use(express.static('public'));
// app.use(express.urlendcoded({ extended: true}));
// app.use(express.json());

// const domain = 'http://localhost:3000';

// app.post('/create-checkout-session', async (req, res) => {
//   const prices = await stripe.prices.list({
//     lookup_keys: [req.body.lookup_key],
//     expand: ['data.product'],
//   });
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${domain}?success=true`,
//     cancel_url: `${domain}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

// app.listen(3000, () => console.log('👂🏾 Running on port 3000 👂🏾'));


const express = require('express');
const app = express();
const [testKey,stripe,express] = [require('./stripeAPIkey'), require('stripe')(testKey), require('express')];

app.use(express.static('public'));
app.use(express.json());


//items is an array
const calculateOderAmount = (items)=> items.reduce((sum, curVal)=> sum + curVal);
app.post('/create-payment-intent', async (request, response)=>{
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

const process = require('dotenv').config()
const PORT = process.env.PORT
app.listen(PORT,()=> `💵 Listening on port ${PORT}`)
