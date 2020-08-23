import { combineReducers } from "redux";
import PostReducer from "./post.reducer";
import AppReducer from "./app.reducer";



export default combineReducers({
    posts:PostReducer,
    app:AppReducer
})