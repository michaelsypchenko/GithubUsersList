import userActions from './Users.action';

//actions
const next = () => (dispatch, getState) =>{
    dispatch({
        type: actionTypes.NEXT_PAGE
    });
    userActions.getUsers()(dispatch, getState);
};

const back = () => (dispatch, getState) => {
    const currentPageIndex = getState().pagination.pageIndex;

    if(currentPageIndex > 0) {
        dispatch({
            type: actionTypes.PREVIOUS_PAGE
        });
        userActions.getUsers()(dispatch, getState);
    }
};

export default { next, back };

//action types
export const actionTypes = {
    NEXT_PAGE: 'NEXT_PAGE',
    PREVIOUS_PAGE: 'PREVIOUS_PAGE'
}
