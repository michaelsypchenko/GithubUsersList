import ApiActions from './API.actions';
import qs from "query-string";
import ApiRoutes from './../constants/API.routes';

//actions
const { get } = ApiActions;
const usersPerPage = 20;

const getUsers = () => (dispatch, getState) => {
  const pageIndex = getState().pagination.pageIndex;

  get(
      actionTypes.GET_CURRENT_USERS_LIST,
      {
          route: ApiRoutes.USERS.LIST(
              qs.stringify({per_page: usersPerPage, since: (pageIndex + 1) * usersPerPage}
          ))
      }
   )(dispatch)
      .then(({data}) => {

          const usersList = data.map(({login, html_url, avatar_url}) => ({
              login, html_url, avatar_url
          }));

          dispatch({
              type: actionTypes.GET_CURRENT_USERS_LIST,
              payload: usersList
          });

      });
};

const getUser = login => dispatch => {
    get(
        actionTypes.GET_CURRENT_USER,
        {
            route: ApiRoutes.USERS.USER(login)
        }
     )(dispatch)
        .then(({data}) => {

            dispatch({
                type: actionTypes.GET_CURRENT_USER,
                payload: data
            });

        });

};

export default { getUsers, getUser };

//action types
export const actionTypes = {
    GET_CURRENT_USERS_LIST: 'GET_CURRENT_USERS_LIST',
    GET_CURRENT_USER: 'GET_CURRENT_USER'
};

