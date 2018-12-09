import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { rootReducer } from '../reducers'

export default () => {
    const middlewares = [applyMiddleware(thunkMiddleware)];
    process.env.NODE_ENV === 'development' && (
        middlewares.push(applyMiddleware(createLogger()))
    );

    const store = compose(...middlewares)(createStore)(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}
