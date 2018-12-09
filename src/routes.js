import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/index.js'
import List from './components/List'
import Home from './components/Profile'
import NotFound from './components/NotFound'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={List} />
            <Route path='profile/:user' component={Home} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);
