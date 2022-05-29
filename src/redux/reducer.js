import {combineReducers} from "redux";

import listName from './reducerElm/listName'

const rootReducer = combineReducers({
    listName: listName,
})

export default rootReducer;