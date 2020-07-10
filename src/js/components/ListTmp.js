import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { suppliers: state.suppliers,isLoggedIn:state.isLoggedIn,currentUser:state.currentUser };
};

const ConnectedList = ({ suppliers,isLoggedIn,currentUser }) => (
    <div> render me {isLoggedIn?"true":"false"} {currentUser} res
  <ul>
    {suppliers.map(el => (
      <li key={el.id}>{el.title}test</li>
    ))}
  </ul>
  </div>
);

const ListTmp = connect(mapStateToProps)(ConnectedList);

export default ListTmp;