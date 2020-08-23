import React from "react";
import Item from "./Item";
import { connect } from "react-redux";



 function UserList({data}) {
  return (
    <ul className="list-group">
      {data.map((user, index) => {
        return <Item {...user} key={index + Math.random()} />;
      })}
    </ul>
  );
}

const mapStateToProps=(state)=>{
  return{
    data:state.data
  }
}

export default connect(mapStateToProps)(UserList)
