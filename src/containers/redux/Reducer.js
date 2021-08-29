import * as valueType from './ValueType';

const initialState = {
    loading: false,
    dish: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case valueType.PENDINGREQ:
            return {
                ...state,
                loading: true,
                dish: [],
                error: ''
            }
        case valueType.SUCCESSREQ:
            return {
                ...state,
                loading: false,
                dish: state.dish.concat(action.payload),
                error: ''
            }
        case valueType.FAILUREREQ:
            return {
                ...state,
                loading: false,
                dish: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;