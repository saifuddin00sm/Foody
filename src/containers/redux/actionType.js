import * as valueType from './ValueType';
import axios from 'axios';

export const pendingReq = () => {
    return {
        type: valueType.PENDINGREQ
    }
}
export const successReq = (dish) => {
    return {
        type: valueType.SUCCESSREQ,
        payload: dish
    }
}
export const failureReq = (err) => {
    return {
        type: valueType.FAILUREREQ,
        payload: err
    }
}

// Get search data
export const getData = (value) => {
    return (dispatch) => {
        dispatch(pendingReq());
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s${value}`)
            .then(res => {
                const data = res.data.meals;
                if (data === null) {
                    dispatch(successReq(['no result']))
                } else {
                    dispatch(successReq(data))
                }

            })
            .catch(err => dispatch(failureReq(err.message)));
    }
}


// Get initial data
export const getInitialData = (value) => {
    return (dispatch) => {
        dispatch(pendingReq());
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a${value}`)
            .then(res => {
                const data = res.data.meals;
                dispatch(successReq(data))
            })
            .catch(err => dispatch(failureReq(err.message)));
    }
}

// getCategory
export const getCategory = (value) => {
    return (dispatch) => {
        dispatch(pendingReq());
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
            .then(res => {
                const data = res.data.meals;
                dispatch(successReq(data))
            })
            .catch(err => dispatch(failureReq(err.message)));
    }
}