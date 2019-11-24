import {createStore, compose, applyMiddleware} from 'redux';
import RootReaducer from '../reducers/index';
import {save} from 'redux-localstorage-simple';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = PreloaderState =>( 
    createStore(
        RootReaducer,
        PreloaderState,
        composeEnhancers(
            applyMiddleware(save({namespace: 'zoo'}))
        ),
    )
);

const Store = configureStore({});
export default Store;