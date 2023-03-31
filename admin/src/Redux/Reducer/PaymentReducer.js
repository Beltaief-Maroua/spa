import { CREATE_PAYMENT } from "../ActionType/ActionType";

const initialState={
    amount: 0,
    currency: 'usd',
}

export const PaymentReducer = (state=initialState, {type,payload}) =>{
    
    switch (type){
        case CREATE_PAYMENT:
      return {...state,amount:payload}

        default:
      return state;
    }
}

