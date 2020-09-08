import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger';

import { pingEpic as rootEpic } from './epics'
import { pingReducer as rootReducer } from './reducers'

const epicMiddleware = createEpicMiddleware()

export default function configureStore() {
    const enhancers = [applyMiddleware(epicMiddleware), applyMiddleware(logger)];
    const store = createStore(
        rootReducer,
        compose(...enhancers)
    );

    epicMiddleware.run(rootEpic);

    return store;
}
