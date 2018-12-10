import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import usersActions, {actionTypes as userActionTypes} from '../../actions/Users.action';
import { browserHistory, Link } from 'react-router';
// import qs from 'querystring';
import './main.scss';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 0
        }
    }
    componentDidMount() {
        browserHistory.listen(event => {
            this.setState({page: parseInt(event.query.page || 0)});
            this.props.getUsers(parseInt(event.query.page || 0))
        });
    }

    componentWillUnmount() {
        browserHistory.listen(() => {});
    }

    render() {
        const { usersList, is_GetUsersRequestPending } = this.props.users;

        return (
            <div>
                <div className='row'>
                    <div className='col-sm-12'>
                    <h3> Users list </h3>
                </div>
            </div>
            <div className='row navigation-buttons_container'>
                { (this.state.page || null) && (
                    <button onClick={ () => browserHistory.push({pathname: '/', search: `?page=${parseInt(this.state.page) - 1}`}) }>
                        Previous page
                    </button>
                )}
                <button onClick={ () => browserHistory.push({pathname: '/', search: `?page=${parseInt(this.state.page) + 1}`}) }>
                    Next page
                </button>
            </div>
            <div className='row user-item' >
                <div className='col-sm-4'>
                    Avatar preview
                </div>
                <div className='col-sm-4'>
                    Login
                </div>
                <div className='col-sm-4'>
                    Profile link
                </div>
            </div>
            <div className='row'>
            {
                is_GetUsersRequestPending ? (
                    <div className='col-sm-12'>
                        Wait for load of users list
                    </div>
                ):
                usersList.map(userListItem)
            }
            </div>
        </div>

    )}
}

const userListItem = (user, index) => (
    <Link to={`profile/${user.login}`} key={ index }>
        <div className='row centred-content user-item' >
            <div className='col-sm-4'>
                <img className='avatar' src={user.avatar_url} />
            </div>
            <div className='col-sm-4'>
                {user.login}
            </div>
            <div className='col-sm-4'>
                <a href={user.html_url}>{user.html_url}</a>
            </div>
        </div>
    </Link>
);

export default connect(
    ({pagination, api, users}) => ({
        pagination,
        users,
        is_GetUsersRequestPending: api.pending_actions.includes(userActionTypes.GET_CURRENT_USERS_LIST)
    }),
    dispatch => bindActionCreators(usersActions, dispatch)
)(List);
