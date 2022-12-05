import { types } from "./types"



const initialState = {
    result: ""
}

export function reducer (state=initialState, action) {
    
    if(action.num1 == "" || action.num2 == ""){
        return {...state, result: "Введите число"}
    }
    else{
        switch(action.type) {
            case types.SUM_NUM:
                return {...state, result: action.payload}
            case types.MINUS_NUM:
                return {...state, result: action.payload}
            case types.MULTIPLY_NUM:
                return {...state, result: action.payload}
            case types.DIVIDE_NUM:
                if(action.num2 == 0){
                    return {...state, result: "Делить на ноль вообще-то можно, но нет..."}
                }
                else{
                    return {...state, result: action.payload}
                }
            default: return state
        }
    }


    
}
