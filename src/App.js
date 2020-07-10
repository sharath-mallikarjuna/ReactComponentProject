import React, { Component } from 'react';
import logo from './img/b7.jpg';
import './App.css';
import Login from './js/components/Login';
import { Box, Menu, Heading, Header, Text, List, Button } from 'grommet';
import { Apps } from 'grommet-icons'
import BackgroundImage from 'react-background-image';
import { findByTestId } from '@testing-library/react';
import Home from './js/components/Home';
import { connect } from 'react-redux';
import ListTmp from './js/components/ListTmp';
import { addSupplier, toggleIsLoggedIn, updateCurrentUser } from './js/actions';

const mapStateToProps = state => {
  return {
    suppliers: state.suppliers,
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addSupplier: supplier => dispatch(addSupplier(supplier)),
    toggleIsLoggedIn: () => dispatch(toggleIsLoggedIn()),
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user))
  };
}
const theme = {
  "global": {
      "colors": {
          "background": {
              "img": { logo },
              "light": "#ffffff",
              "dark": "#000000"
          }
      },
      "font": {
          "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
      },

  },
  "button": {
      "extend": [
          { "background": "#151B54", color: "white" }
      ]
  }
}

var sectionStyle = {
  // width: "inherit",
  // height: "97vh",
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
};
export class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    document.body.style.backgroundColor = "black";
  }
  handlerIsLoggedIn = () => {
    { this.props.toggleIsLoggedIn() };
  }
  handleCurrentUser = (user) => {
    { this.props.updateCurrentUser(user) };
  }
  render() {
    const { isLoggedIn, addSupplier, toggleIsLoggedIn, currentUser } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn
          ?
          <section style={sectionStyle}><Home /> </section>
          :
          <section style={sectionStyle} overflow="auto">

            <Box gap="xsmall" fill={true} overflow="auto" align="center" flex="grow">

              <Header round="small" background="black" direction="row" flex={false} gap="medium" fill="horizontal" pad="small">
                <Box align="start" justify="center" direction="row" gap="xsmall">
                  <Apps></Apps>
                </Box>

                <Box direction="row" >
                  <Menu label={<Text weight="bold">Help?</Text>} round={{ side: 'top', size: 'small' }}
                    elevation="medium" hoverIndicator={true}
                    items={[{ "label": "Blog" }]} />
                  <Box direction="column">
                    {/* <Menu label={<Text weight="bold">About</Text>} round={{ side: 'top', size: 'small' }}
                      elevation="medium" hoverIndicator={true}
                      items={[{ "label": "About" },
                      { "label": "Wiki" },
                      { "label": "Contact Support" }]}
                      open={false} /> */}
                  </Box>
                </Box>
              </Header>
              <Box margin={{ "top": "small" }} align="center"> <Login handlerIsLoggedIn={this.handlerIsLoggedIn.bind(this)}
                handleCurrentUser={this.handleCurrentUser.bind(this)} /> </Box>
            </Box>

          </section>
        }
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
