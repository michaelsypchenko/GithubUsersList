import { actionTypes } from '../actions/API.actions'
const { GET_REQUEST_PENDING, GET_REQUEST_DONE } = actionTypes;

const initialState = {
    pending_actions: []
};

export default (state = initialState, action) => {
    const pending_actions = [...state.pending_actions];

    switch (action.type) {
        case GET_REQUEST_PENDING:
            return {
                ...state,
                pending_actions: pending_actions.concat(action.payload)
            };

        case GET_REQUEST_DONE:
            return {
                ...state,
                pending_actions: pending_actions.filter(actionType => actionType !== action.payload)
            };

        default: return state;
    }
}
