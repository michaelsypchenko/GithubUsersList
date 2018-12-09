import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import usersActions, {actionTypes as userActionTypes} from "../../actions/Users.action";
import './main.scss';

class Home extends Component {
    componentDidMount() {
        this.props.getUser(this.props.params.user);
    }

    render() {

    const { name, followers, following, created_at, company, email, location, blog, bio, avatar_url } = this.props.users.selectedUser;

    return !this.props.is_GetUserRequestPending ? (
        <div className='row'>
            <div className='col-sm-6'>
                <p>Name: <strong>{name}</strong></p>
                <p>Followers: <strong>{followers}</strong></p>
                <p>Following <strong>{following}</strong></p>
                <p>Created: <strong>{created_at}</strong></p>
                <p>Company: <strong>{company}</strong></p>
                <p>Email: <strong>{email}</strong></p>
                <p>Location: <strong>{location}</strong></p>
                <p>Blog: <strong>{blog}</strong></p>
                <p>Bio: <strong>{bio}</strong></p>
            </div>
            <div className='col-sm-6 centred-content'>
                <img className='avatar' src={ avatar_url }/>
            </div>
        </div>
    ) : (
        <div className='row'>
            <div className='col-sm-12'>
                <h3>User data loading</h3>
            </div>
        </div>
    )
  }
}

export default connect(
    ({ api, users }) => ({
        users,
        is_GetUserRequestPending: api.pending_actions.includes(userActionTypes.GET_CURRENT_USER)
    }),
    dispatch => bindActionCreators(usersActions, dispatch)
)(Home);