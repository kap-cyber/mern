export const initialState = {
    fullname:'',
    email:'',
    phone:'',
    password:'',
    confirm_password:''
}
export const registerReducer = (state,action) =>{
    switch (action.type){
         case 'SET_FIELD':
            return {
            ...state,
            [action.field]:action.value
            };
        case 'RESET_FORM':
            return initialState;
            
        default:
            return state;        

    }
};