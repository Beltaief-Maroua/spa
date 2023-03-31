import { GET_CURRENT , LOGIN} from "../ActionType/ActionType";

const initialState = {
  isAuth:false,
  services:[]
};

export const AdminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
    case LOGIN: 
    return { ...state,isAuth:true,session:payload};


    case GET_CURRENT: 
    return { ...state}
    default:
      return state;
  }
};

