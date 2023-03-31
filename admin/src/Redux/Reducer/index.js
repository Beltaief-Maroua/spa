import { combineReducers } from "redux";
import {AdminReducer} from "./AdminReducer"
import {ServiceReducer} from "./ServiceReducer"
import { ReservReducer } from "./ReservReducer";


export const rootReducer = combineReducers({
    AdminReducer, ServiceReducer,ReservReducer
})
