// This is your test secret API key.

const testKey = require('./stripeAPIkey')
const stripe = require('stripe')(testKey);
const express = require('express');
const app = express();
app.use(express.static('public'));

const domain = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${domain}?success=true`,
    cancel_url: `${domain}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(3000, () => console.log('👂🏾 Running on port 3000 👂🏾'));