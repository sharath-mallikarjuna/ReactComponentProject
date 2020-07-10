import React, { Component } from 'react';
import { Grommet, Box, Image, Button, Menu, Text, Stack ,Grid } from 'grommet'
import { Login, User, Contact, Logout, Apps, Article, Achievement, Notification } from 'grommet-icons';
import { CONTACTS_MAINPAGE, ABOUT_MAINPAGE } from "../constants/action-types";
import logo from '../../img/b4.jpg'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "isLoggedIn": false,
            "showLogin": false,
        }
    }
    handlersetMainPage = (payload) => {
        this.props.handlersetMainPage(payload);
    }
    handleClick_About = () => {
        console.log("About")
        this.handlersetMainPage(ABOUT_MAINPAGE);
    }
    handleClick_Contact = () => {
        console.log("contact")
        this.handlersetMainPage(CONTACTS_MAINPAGE);
    }
    handleClick_LogOut = () => {
        console.log("logout")
        this.props.handlerToggleIsLoggedIn();
    }
    render() {
        return (
            <Box gap="medium" margin={{"left":"small","right":"small"}} direction="row" align="center" justify="between">
                <Box margin={{ "left": "xsmall" }} align="center" justify="center" direction="row" gap="xsmall">
                    <Apps></Apps>
                </Box>

                <Box gp="small" justify="center">
                    <Box gap="xsmall" height="10vh" direction="row" >
                    <Button style={{ width:"9vw", border: "2px solid #223E4F", "border-radius": "10px" }} label={<Text weight="bold">Contact</Text>} name="Contact" icon={<Contact />} onClick={this.handleClick_Contact} />
                    <Button style={{ width:"9vw", border: "2px solid #223E4F", "border-radius": "10px" }} label={<Text weight="bold">About</Text>} value="About" icon={<Article />} onClick={this.handleClick_About} />
                    <Menu style={{ border: "2px solid #223E4F", "border-radius": "10px" }}
                        label={<Text weight="bold">Help?</Text>} round={{ side: 'top', size: 'small' }}
                        hoverIndicator={true}
                        items={[
                        { "label": "Blog" }]} />
                        <Menu style={{ width:"6vw", padding:"0px", border: "2px solid #223E4F", "border-radius": "10px" }}
                            label={<Text weight="bold"> <User /> </Text>} round={{ side: 'top', size: 'small' }}
                            hoverIndicator={true}
                            items={[
                            { "label": "Logout", onClick: this.handleClick_LogOut }]} />
                    </Box>
                </Box>
            </Box>
        );
    }
}
export default Header;