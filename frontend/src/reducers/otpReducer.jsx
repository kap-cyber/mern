export const initialState={
    email:"",
    otp:""
}

export const otpReducer=(state,action)=>{
    switch(action.type){
        case 'SET_EMAIL':
            return{
                ...state,
                [action.field]:action.value
            }
        case 'SET_OTP':
            return {
                ...state,
                [action.field]:action.value
            }    
        default:
           return state;    
    }
}