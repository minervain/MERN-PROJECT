import {combineReducers} from 'redux'
import { createStore, applyMiddleware} from 'redux';
import authReducer from './reducers/auth'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';



const initialState={


}

const reducers=combineReducers({
    auth:authReducer
})

const store=createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))

export default store;