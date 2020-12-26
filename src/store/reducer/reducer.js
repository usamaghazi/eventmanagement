import * as actionTypes from '../actions/action';

const initialState = {
    idToken:null,
    localId:null,
    error:null
}

const reducer = (state=initialState, action) => {
        switch (action.type) {
            case actionTypes.AUTH_SUCCESS:
                return{
                    ...state,
                    idToken:action.idToken,
                    localId:action.localId
                }
             case actionTypes.AUTH_FAIL:
                 return{
                     ...state,
                     error:action.error
                 }   
            case actionTypes.AUTH_SUCCESSS:
                return{
                    ...state,
                    idToken:action.idToken,
                    localId:action.localId,
                }
            case actionTypes.AUTH_FAILL:
                return {
                    ...state,
                    error:action.error
                }
            case actionTypes.LOG_OUT:
                return {
                    ...state,
                    idToken:null,
                    localId:null
                }   
            default:
                return state
        }
}

export default reducer;