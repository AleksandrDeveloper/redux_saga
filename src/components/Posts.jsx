import React from 'react'
import Post from './Post'


export default ({posts}) => {
    if(!posts.length){
        return <h2>Post while </h2>
    }
    return(
        <div>
            <h3>Posts</h3>
            {posts.map(post=>(
                <Post key={Math.random()} post={post} />
            ))}
        </div>
    ) 
}
