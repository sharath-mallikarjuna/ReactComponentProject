import { ADD_SUPPLIER,TOGGLE_IS_LOGGED,UPDATE_CURRENTUSER,SET_MAINPAGE,SET_SELECTEDSUPPLIER,
    COMPANIES_DATA_LOADED,GETSUPPLIERS,SUPPLIER_DATA_LOADED } from "../constants/action-types";
import axios from 'axios';

export function addSupplier(payload) {
    return { type: ADD_SUPPLIER, payload }
};
export function toggleIsLoggedIn(){
    return { type:TOGGLE_IS_LOGGED}
}
export function updateCurrentUser(payload){
    return { type:UPDATE_CURRENTUSER,payload}
}
export function setMainPageFunc(payload){
    return { type:SET_MAINPAGE,payload}
}
export function setSelectedSupplier(payload){
    return { type:SET_SELECTEDSUPPLIER,payload}
}
export function getData() {
    return function(dispatch) {
        // axios.get('assets/supplierlist.json').then(response => {
      return fetch("assets/supplierlist.json")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: SUPPLIER_DATA_LOADED, payload: json });
        });
    };
  }
  export function getData_Companies() {
    return function(dispatch) {
      return fetch("assets/companies.json")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: COMPANIES_DATA_LOADED, payload: json });
        });
    };
  }  