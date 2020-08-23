import { CREATE_POST, FETCH_POSTS, REQUEST_POSTS } from "../types_actions";
import { showLoader, hideLoader } from "./app";

export function createPost(post){
    return{
        type:CREATE_POST,
        payload:post
    }
}

// export function fetchPost(post){
//     return async dispatch=>{
//         dispatch(showLoader())
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
//         const data = await res.json();
//         dispatch({
//             type:FETCH_POSTS,
//             payload:data
//         })
//         dispatch(hideLoader())
//     }
// }

export function fetchPost(post){
    return{
        type:REQUEST_POSTS
    }
}