import store from "../js/store/index";
import { addSupplier,toggleIsLoggedIn,updateCurrentUser,setMainPageFunc,setSelectedSupplier } from "../js/actions/index";

window.store = store;
window.addSupplier = addSupplier;
window.toggleIsLoggedIn = toggleIsLoggedIn;
window.updateCurrentUser=updateCurrentUser;
window.setMainPageFunc=setMainPageFunc;
window.setSelectedSupplier=setSelectedSupplier;
