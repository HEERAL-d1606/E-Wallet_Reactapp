
import { createStore,compose,applyMiddleware } from 'redux';
//import reducers from './reducers';
import reducers from './Reducer/reducer';
import thunk from 'redux-thunk';

//const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//export default store;


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;