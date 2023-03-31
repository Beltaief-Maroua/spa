import {GET_ALL_SERVICES,GET_SERVICES_ID} from "../ActionType/ActionType"

const initialState = {
    services:[],
    serviceID:{}
}

export const ServiceReducer = (state=initialState, { type, payload }) =>{

    switch (type){
        case GET_ALL_SERVICES:
      return {...state,services:payload}


        case GET_SERVICES_ID:
      return {...state, serviceID:payload}

        default:
      return state;
    }
}

