let defaultState = {
    id: 'V_Raghav',
    pwd: '12345678'
}

export const landingReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'EXAMPLE': 
        return{
            ...state,
            examplePropOne: 'newExample success'
        }
        default: return state;
    }
}

export const loginReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN': 
        return{
            ...state,
            id: 'Raghav_08',
            password: '12345678'
        }
        default: return state;
    }
}