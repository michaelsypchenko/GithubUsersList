import React, { Component } from 'react';
import './main.scss';

export default class App extends Component {
    render() {
        return (
            <div className='container app-root'>
                <div className='row app-name'>
                    <div className='col-md-12'>
                        <h2>Github users profiles</h2>
                    </div>
                </div>
                {this.props.children}
            </div>

    )}
}

