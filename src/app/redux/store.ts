import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './reducers/root';


const middleware: Array<Middleware> = [thunk, logger];

const configureStore = (preloadedState: any): Store => (
    createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middleware))
    )
);

export const store: Store = configureStore({});
