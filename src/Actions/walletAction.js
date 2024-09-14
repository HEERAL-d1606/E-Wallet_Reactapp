export const BUY_MOVIE = "BUY_MOVIE";
export const BUY_GROCERY= "BUY_GROCERY"
export const RECHARGE = "RECHARGE"
export const SHOW_DATA= "SHOW_DATA"
//import {useEffect} from "react"

export function buyMovie(val){
    return{
        type: BUY_MOVIE,
        payload: val
    }
}
export function buyGroc(val){
    return{
        type: BUY_GROCERY,
        payload: val
    }
}
export function Recharge(val){
    return{
        type: RECHARGE,
        payload: val
    }
}
export function showData(data){
    return {
        type: "SHOW_DATA",
        payload:data
    }
}
export function getmydata() {
    return async (dispatch)=>{

        
        // Fetching results from an API : asynchronous action
        const response = await fetch(
            ' http://localhost:3000/user');
            //'http://localhost:3000/todos/1');
        const data = await response.json();
        dispatch(showData(data))
        }
}

