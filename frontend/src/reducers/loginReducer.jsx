export const initialState = {
    email:"",
    password:""
}

export const loginReducer = (state,action)=>{

    switch(action.type){
        case 'SET_LOGIN':
            return{
                ...state,
                [action.field]:action.value
            }
        case 'RESET_FORM':
            return initialState;
        default:
            return state;        
    }
};