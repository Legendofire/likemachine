import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
// Import Reducers
import linksReducer from "./reducers/linksReducer";
import userReducer from "./reducers/userReducer";

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    User: userReducer,
    Links: linksReducer
}), composeEnhancers(middleware));

export default store;
