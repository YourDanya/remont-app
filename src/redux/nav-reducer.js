const  TOGGLE_ACTIVE_CLASS='SET_ACTIVE_CLASS'

let initialState= {
    isActive: false
}

const navReducer =(state=initialState, action) =>{
    switch (action.type) {
        case TOGGLE_ACTIVE_CLASS:
            return {
                ...state,
                isActive: !state.isActive
            }
        default:
            return state
    }
}

export let toggleActiveClass= ()=>({type: TOGGLE_ACTIVE_CLASS})

export default navReducer

