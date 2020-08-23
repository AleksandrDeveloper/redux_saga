import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'


const Posts = ({postsArr}) => {
    if(!postsArr.length){
        return <p>Post while </p>
    }
    return(
        <div>
            <h3>Posts</h3>
            {postsArr.map(post=>(
                <Post key={Math.random()} post={post} />
            ))}
        </div>
    )  
}

function mapStateToProps(state){
    return{
        postsArr:state.posts.posts
    }
}


export default connect(mapStateToProps)(Posts)