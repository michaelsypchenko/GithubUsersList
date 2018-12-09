import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h3 className='col-sm-12'>
                        Cant find page. Back to <Link to='/'>main</Link>?
                    </h3>
                </div>
            </div>
    )}
}
