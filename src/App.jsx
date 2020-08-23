import React from "react";
import UserList from "./components/UserList";
import { useStore, useDispatch, connect } from "react-redux";
import { startLoadData, loadData } from "./store/actions";

function App({loading}) {
  const dispatch = useDispatch()
  return (
    <div className="App container">
      <nav className="navbar navbar-light bg-light pb-5">
        <span className="navbar-brand mb-0 h1">Redux Saga</span>
      </nav>
      <div className="d-flex py-4">
        <button 
        type="button" 
        className="btn btn-primary" 
        onClick={()=>dispatch(loadData())}
        >User get</button>
      </div>

      {loading? 
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      : <UserList />}
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    loading:state.loading
  }
}

export default connect(mapStateToProps)(App);
 

      