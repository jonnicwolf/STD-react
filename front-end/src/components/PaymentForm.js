import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconcolor: '#c4f0ff',
            color: '#fff',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antiliased',
            ':-webitkit-sutofill': {color: '#fce883'},
            ': :placeholder': {color: '#877bbfd'}
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee'
        }
    }
}

export default function 
PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e)=> {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
    
        if (!error){
            try {
                const {id} = paymentMethod
                const response = await axios.post('http://localhost:4000/payment',{
                    amount: 1000,
                    id
                })
                if (response.data.success){
                    console.log('Successful payment')
                    setSuccess(true)
                }
            } catch (error) {
                console.log('Error',error)
            }
        }
        else {
            console.log('Error',error)
        }
    }
  return (
    <>
      {
        !success?
        <form onSubmir={handleSubmit}>
            <fieldset className="FormGroup">
                <div class="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
        <div>
            <p>Tada! You did it</p>
        </div>
      }
    </>
  )
}
