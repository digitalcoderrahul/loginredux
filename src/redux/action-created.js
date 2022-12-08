import * as actionTypes from "./action-types"
import exios from "axios";


export const logValue =(data)=>{
    console.log(data,"jhgjg")
    return{
        type:actionTypes.LOGIN,
        payload:data
    }
}

export const enterValue =(data)=>{
    console.log(data,"data")
    return{
        type:actionTypes.VALUECHANGE,
        payload:data
    }
}

