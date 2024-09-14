import { BUY_GROCERY, BUY_MOVIE, RECHARGE, SHOW_DATA, getmydata, showData } from "../Actions/walletAction";

const { combineReducers } = require("redux");

const INITAL_STATE = {wallet:6000, user:[]}

export const dataReducer = (state=INITAL_STATE, action)=>{
	switch(action.type) {
		case BUY_MOVIE : return {...state,wallet:state.wallet-action.payload};
		case BUY_GROCERY : return {...state,wallet:state.wallet-action.payload};
        case RECHARGE: return{ ...state,wallet:state.wallet+parseInt(action.payload)};
        case SHOW_DATA: return {...state,user:action.payload}
		default : return state;
	}
}

const reducers = combineReducers({
	data : dataReducer
})

export default reducers
