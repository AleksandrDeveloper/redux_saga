import React from "react";
import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";


export default  function App(props) {
  return (
    <div className="App container py-3">
        <div className="row">
          <div className="col">
              <PostForm />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Синхроые посты</h2>
            <Posts posts={[1,23,4]} /> 
          </div>
          <div className="col">
            <h2>Асинхроные посты </h2>
            <FetchedPosts posts={[]} />
          </div>
        </div>
    </div>
  ); 
}

 

      