import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import mainDrawerReducer from './store/reducers/drawer'
import currUser from './store/reducers/currentUser'
import auth from './store/reducers/auth'
import persons from './store/reducers/persons'

const rootReducer = combineReducers({
    mainDrawer: mainDrawerReducer,
    currUser,
    auth,
    persons
});

const logger = store => {
    return next => {
        return action => {
            return next(action);
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
