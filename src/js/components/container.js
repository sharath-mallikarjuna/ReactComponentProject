import React from "react";
import { connect } from "react-redux";
import App from "../../App";
import {addSupplier,toggleIsLoggedIn} from '../actions';

const mapStateToProps = state => {
  return { counter : state };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        addSupplier : () => dispatch ( addSupplier()),
        toggleIsLoggedIn:()=>dispatch(toggleIsLoggedIn())
    };
}
// const ConnectedList = ({ articles }) => (
//   <ul>
//     {articles.map(el => (
//       <li key={el.id}>{el.title}</li>
//     ))}
//   </ul>
// );

const List = connect(mapStateToProps,mapDispatchToProps)(App);

export default List;