import { actionTypes } from '../actions/Users.action'
const { GET_CURRENT_USERS_LIST, GET_CURRENT_USER } = actionTypes;

const initialState = {
    usersList: [],
    selectedUser: {}
};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_CURRENT_USERS_LIST: return {...state, usersList:  action.payload};
        case GET_CURRENT_USER: return {...state, selectedUser:  action.payload};

        default: return state;

    }
}