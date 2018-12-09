import { actionTypes } from '../actions/Pagination.actions'
const { NEXT_PAGE, PREVIOUS_PAGE } = actionTypes;
const initialState = {
    pageIndex: 0
};

export default (state = initialState, action) => {

    switch (action.type) {

        case NEXT_PAGE: return {...state, pageIndex: state.pageIndex + 1};
        case PREVIOUS_PAGE: return {...state, pageIndex: state.pageIndex - 1};

        default: return state;

    }
}
