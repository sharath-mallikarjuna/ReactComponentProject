import React, { Component } from 'react';
import { Grid, Box } from 'grommet';
import Header from './Header';
import SideBar from "./SideBar";
import MainContent from './MainContent';
import SupplierPage from './SupplierPage';
import Contact from './Contact';
import About from './About';
import Companies from './Companies';
import Reports from './Reports'
import { setMainPageFunc, toggleIsLoggedIn } from '../actions';
import { connect } from 'react-redux';
import { HOME_MAINPAGE, SUPPLIER_MAINPAGE, CONTACTS_MAINPAGE, ABOUT_MAINPAGE, COMPANIES_MAINPAGE, REPORTS_MAINPAGE } from "../constants/action-types";


const mapStateToProps = state => {
  return {
    suppliers: state.suppliers,
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser,
    setMainPage: state.setMainPage
  };
};
function mapDispatchToProps(dispatch) {
  return {
    toggleIsLoggedIn: () => dispatch(toggleIsLoggedIn()),
    setMainPageFunc: (payload) => dispatch(setMainPageFunc(payload))
  };
}
class Home extends Component {
  constructor(props) {
    super(props);
  }
  handlersetMainPage = (payload) => {
    {
      this.props.setMainPageFunc(payload)
    };
  }
  handlerToggleIsLoggedIn = () => {
    {
      this.props.toggleIsLoggedIn()
    };
  }
  render() {
    const { suppliers, isLoggedIn, currentUser, setMainPage, toggleIsLoggedIn, setMainPageFunc } = this.props;
    console.log(isLoggedIn + "    isLoggedIn " + setMainPage);
    return (
      <Box background="white">
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          gap="xxsmall"
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            { name: "sidebar", start: [0, 1], end: [0, 1] },
            { name: "main", start: [1, 1], end: [1, 1] }
          ]}
        >
          <Box gridArea="header" background="black" style={{borderBlockColor:"aqua"}} round="xsmall" margin={{"left":"xxsmall","right":"xxsmall","top":"xxsmall"}}>
            <Header
              handlersetMainPage={this.handlersetMainPage.bind(this)}
              handlerToggleIsLoggedIn={this.handlerToggleIsLoggedIn.bind(this)}>
            </Header></Box>
          <Box gridArea="sidebar" background="#223E4F" round="xsmall">
            <SideBar
              handlersetMainPage={this.handlersetMainPage.bind(this)}>
            </SideBar></Box>
          <Box gridArea="main" background="black" round="xsmall">
            {setMainPage == HOME_MAINPAGE && <MainContent></MainContent>}
            {setMainPage == SUPPLIER_MAINPAGE && <SupplierPage></SupplierPage>}
            {setMainPage == CONTACTS_MAINPAGE && <Contact></Contact>}
            {setMainPage == ABOUT_MAINPAGE && <About></About>}
            {setMainPage == COMPANIES_MAINPAGE && <Companies></Companies>}
            {setMainPage == REPORTS_MAINPAGE && <Reports></Reports>}
          </Box>
        </Grid>
      </Box>
      // </Grommet> 

    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);