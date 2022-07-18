import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';

// const PUBLIC_KEY = 'pk_test_51KsiJZKxydpyoEYUoMnTqDU42i1oAtXLKiHhnKgRb5AHx4nUT08wZCUJT3sds4zVQ8od0oAFG3iZ1CwN4opfqG3y009yVnK9YC'
// const stripePromise = loadStripe(PUBLIC_KEY)

function Checkout () {
    const PUBLIC_KEY = 'pk_test_51KsiJZKxydpyoEYUoMnTqDU42i1oAtXLKiHhnKgRb5AHx4nUT08wZCUJT3sds4zVQ8od0oAFG3iZ1CwN4opfqG3y009yVnK9YC'
    const stripePromise = loadStripe(PUBLIC_KEY)
    return (
        // <p>yoiyoi</p>
        <>
            <Elements stripe={stripePromise}>
                <p>yoyo</p>
                <PaymentForm />
            </Elements>
        </>
    )
};

export default Checkout ;

// const options = {
//     clientSecret: '{{CLIENT_SECRET}}',        
// }

// const stripe = useStripe(null);
// const elements = useElements(null);

// const handleSubmit = async (event) => {
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

// if (!stripe || !elements) {
//     // Stripe.js has not yet loaded.
//     // Make sure to disable form submission until Stripe.js has loaded.
//   return;
// }

// const result = await stripe.confirmPayment({
//     //`Elements` instance that was used to create the Payment Element
//     elements,
//     confirmParams: {
//     return_url: "https://example.com/order/123/complete",
//   },
// });

// if (result.error) {
//     // Show error to your customer (for example, payment details incomplete)
//     console.log(result.error.message);
// } else {
//     // Your customer will be redirected to your `return_url`. For some payment
//     // methods like iDEAL, your customer will be redirected to an intermediate
//     // site first to authorize the payment, then redirected to the `return_url`.
// }
// };
// return (
//     <form onSubmit={handleSubmit}>
//         <PaymentElement />
//         <button disabled={!stripe}>Submit</button>
//     </form>
// )