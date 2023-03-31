import axios from 'axios'
import { CREATE_PAYMENT,CONFIRM_PAYMENT } from '../ActionType/ActionType'

export const create_payment=(amount,currency) =>async (dispatch)=>{
    try {
          await axios.post('/create-payment-intent',amount,currency)
             dispatch({type:CREATE_PAYMENT,amount,currency})
        
    } catch (error) {
        console.log(error)
    }
}

export const confirm_payement = () =>async (dispatch)=>{
    
}