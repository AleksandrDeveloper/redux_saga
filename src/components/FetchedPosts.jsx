import React from 'react'
import Post from './Post'


export default (props) => {
    if(!props.posts.length){
        return <button className="btn btn-primary">Loading</button>
    }
    return props.posts.map(post=>(
        <Post key={Math.random()} post={post} />
    ))
}
 