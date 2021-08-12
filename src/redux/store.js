import { createStore, combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";


import cityReducer from "./reducers/CityReducers"

let reducers = combineReducers({
    cities: cityReducer,
    form: formReducer
})


let store = createStore(reducers)

window.store = store;

export default store;