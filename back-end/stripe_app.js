import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';
import './stripe_app.css';

//Make sure to call loadStripe outside of a component's 
// render to avoid recreating the Stripe object on every render.
 const stripePromise = loadStripe('pk_test_51KsiJZKxydpyoEYUoMnTqDU42i1oAtXLKiHhnKgRb5AHx4nUT08wZCUJT3sds4zVQ8od0oAFG3iZ1CwN4opfqG3y009yVnK9YC')
 export default App () => {
     const [clientSecret, setClientSecret] = useState('');

     useEffect(()=>{
         // Create PaymentIntent as soon as the page loads
         fetch('/create-payment-intent', {
             method: 'POST',
             headers : {"Content-Type" : "application/json"},
             body : JSON.stringify({items : [{id: "xl-tshirt"}] }),
         })
         .then(response=>response.json())
         .then((data=>setClientSecret(data.clientSecret));
     }, []);

     const appearance = {
         theme: 'stripe'
     };
     const options = {
         clientSecret,
         appearance,
     }

     return (
         <div className="App">
            {
                clientSecret && (
                    <Elements option={options} stripe={stripePromise}>
                        <CheckoutForm/>
                    </Elements>
                )}
         </div>
     )
 }