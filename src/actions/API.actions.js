import axios from "axios/index";

const defaultDomain = 'https://api.github.com';

//actions
const get = (asyncActionType, request) => dispatch => {
    const url = defaultDomain + (request.route || '');

    dispatch({
        type: actionTypes.GET_REQUEST_PENDING,
        payload: asyncActionType
    });

    return axios.get(url)
        .then(res => {

            dispatch({
                type: actionTypes.GET_REQUEST_DONE,
                payload: asyncActionType
            });

            return res;
        })
        .catch(err => {
            dispatch({
                type: actionTypes.GET_REQUEST_DONE,
                payload: asyncActionType
        });

        throw new Error(err);
    });
};

export default { get };

//action types
export const actionTypes = {
 GET_REQUEST_PENDING:'GET_REQUEST_PENDING',
 GET_REQUEST_DONE:'GET_REQUEST_DONE'
};

