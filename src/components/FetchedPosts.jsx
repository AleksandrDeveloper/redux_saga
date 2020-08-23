import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../Store/actions/posts";

export default () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.fetchPosts);
  const loading = useSelector((state) => state.app.loader);
  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch(fetchPost())}>
        Loading
      </button>
    );
  }
  return posts.map((post) => <Post key={Math.random()} post={post} />);
};
