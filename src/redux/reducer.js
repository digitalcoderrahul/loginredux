import * as actionTypes from "./action-types"
const inisialState ={
    value:[],
    userData: {
      emailName: "",
      pass: "",
      address:{
        laneNo1:'',
        laneNo2:'',
      }
    }
    
   
}

export const reducer =(state=inisialState,action)=>{
    switch(action.type){
   case actionTypes.LOGIN:
    console.log(action,"actionsss")
    return {
        ...state,
        userData:{
            ...state.userData,
            emailName:action.payload.email,
            pass:action.payload.password,
            address:{
                ...state.userData.address,
                laneNo1:action.payload.line,
                laneNo2:action.payload.line2,
            }
        }
    }

    case actionTypes.VALUECHANGE:
        return{
            ...state,
            value:[...state.value,action.payload]
        }

        default :
        return state;
    }
}