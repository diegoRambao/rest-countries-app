import { themeReducer } from './store/reducers/themeReducers'
import { countryReducer } from './store/reducers/countryReducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
   theme: themeReducer,
   countries: countryReducer,
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
