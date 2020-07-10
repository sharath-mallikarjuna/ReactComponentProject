import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./App";
import index from "./js/index";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// const routing=(
//   <Router>
//     <div>
//       <ul>
//         <button><NavLink to="/" activeStyle={{color:'red'}}>Back</NavLink></button>
//         <li><NavLink to="/home" activeStyle={{color:'red'}}>Home</NavLink></li>
//         {/* <li><NavLink to="/about" activeStyle={{color:'red'}}>About</NavLink></li>
//         <li><NavLink to="/contact" activeStyle={{color:'red'}}>Contact</NavLink></li>
//         <li><NavLink to="/themebootstrap" activeStyle={{color:'red'}}>ThemeBootstrap</NavLink></li>
//         <li><NavLink to="/table" activeStyle={{color:'red'}}>Table</NavLink></li> */}
        
        
//       </ul>
//       <Switch>
//       <Route exact path="/" component={App}/>
//       <Route path="/home" component={Home}/>
//       {/* <Route path="/about" component={About}/>
//       <Route path="/contact" component={Contact}/>
//       <Route path="/themebootstrap" component={ThemeBootstrap}/>
//       <Route path="/table" component={Table}/> */}

//       {/* <Route component={NotFound}/> */}
//       </Switch>
//     </div>
//   </Router>
// )

// ReactDOM.render(
//   routing,document.getElementById('root')
// );

// serviceWorker.unregister();
