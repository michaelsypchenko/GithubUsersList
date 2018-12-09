import { combineReducers } from 'redux';
import pagination from './Pagination.reducer';
import api from './Api.reducer';
import users from './Users.reducer';

export const rootReducer = combineReducers({
    pagination,
    users,
    api
});
