
const initialState={
    posts:[],
    fetchedPosts:[]
}

export default function PostReducer(state=initialState,action){
    const {type,payload} = action;
        
    switch (type) {
        case '':
            return{

            }
        default:
            return state
    }
}