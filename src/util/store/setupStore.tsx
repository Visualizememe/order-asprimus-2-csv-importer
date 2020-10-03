import thunkMiddleware from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import ROOT_REDUCER from "../reducers";


function configureStore (preloadedState = {}) {
    const middlewares = [ thunkMiddleware ];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [ middlewareEnhancer ];
    const composedEnhancers = compose(...enhancers);
    
    return createStore(
        ROOT_REDUCER,
        preloadedState,
        // @ts-ignore
        composedEnhancers
    );
}


export default configureStore();
