import { GET_RESERVATION } from "../ActionType/ActionType";

const initialState = {
    reservation :[],
}

export const ReservReducer = (state=initialState, { type, payload }) =>{

    switch (type){
        
        case GET_RESERVATION:
      return {...state,reservation:payload}

        default:
      return state;
    }
}