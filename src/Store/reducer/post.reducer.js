import { CREATE_POST, FETCH_POSTS } from "../types_actions";

const initialState={
    posts:[],
    fetchPosts:[]
}

export default function PostReducer(state=initialState,action){
    const {type,payload} = action;
        
    switch (type) {
        case CREATE_POST:
            return{
                ...state,
                posts:[...state.posts,payload]
            }
        case FETCH_POSTS:
            return{
                ...state,
                fetchPosts:payload
            }
        default:
            return state
    }
} 