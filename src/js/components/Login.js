import React, { Component } from 'react'
import { Grommet, Main, Text, TextInput, Button, Box, FormField, TextArea } from 'grommet'
import { FormEdit, Login as LoginIcon, UserAdd,Validate } from 'grommet-icons'
import logo from '../../../src/logo.svg';
import { Form } from 'react-bootstrap'
import '../../App.css';
import Home from './Home';
import { ModalBox } from './ModalBox';
// import {BrowserRouter as Router,Route, NavLink, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import Register from './Register';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "username": '', "password": '',
            "errors": { username: '', password: '' }
        }
        this.isLoggedIn = this.props.isLoggedIn;
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                errors.username =
                    value.length < 5
                        ? 'User name must be 5 characters long!'
                        : '';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        // this.setState({ errors, [name]: value }, () => {
        //     console.log(errors)
        // })
        const valueState = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: valueState
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm(this.state.errors)) {
            this.props.handleCurrentUser(this.state.username);
            this.handleLogin(event);
        } else {
            alert("Unable to Login! Invalid details.");
        }
    }
    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }
    handleLogout = () => {
        this.props.handlerIsLoggedIn();
    }

    handleLogin = (event) => {
        console.log("entry"+event.target.id);
        if(event.target.id=="regLogin")
        this.inputElement.click();
        event.preventDefault();
    }
    componentWillReceiveProps(props) {
        this.setState({ isLoggedIn: props.isLoggedIn });
    }
    handleRegister = () => {
        console.log("Register");
    }
    handleTest = () => {
        console.log("close");
    }
    render() {
        const { errors } = this.state;
        return (
            <>
                <Box overflow="auto" background="black" align="center" justify="center" pad="small" round="small" margin={{"top":"small","bottom":"large"}} >
                <Box alig="center" justify="center" margin="small">
                            <Text size="large"><strong>Welcome</strong></Text>
                        </Box>
                    <Form id="regLogin"onSubmit={this.handleSubmit}>
                        <Box gap="small">
                            <Text  size="medium" weight="bold"> User name </Text>
                            <TextInput round="small" required value={this.state.username} icon={<FormEdit />} placeholder="Enter user name" background="white" name="username" onChange={this.handleChange} />
                            {errors.username.length > 0 && <span className='error'>{errors.username}</span>}

                            <Text size="medium" weight="bold" > Password </Text>
                            <TextInput round="small" required type="password" value={this.state.password} icon={<FormEdit />} placeholder="Enter Password" background="white" name="password" onChange={this.handleChange} />
                            {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                        </Box>
                        <Box style={{ alignItems: "center" }}>
                            <Button path={Home} type="submit" label="Login" align="center" background="accent-1"
                                icon={<LoginIcon color="white" />} margin={{ top: "small" }} />
                            <div onClick={ModalBox.open("success")} ref={input => this.inputElement = input}></div>
                            <ModalBox id="success" handlerIsLoggedIn={this.props.handlerIsLoggedIn}>
                            <Box align="center" width="medium" height="25vh" background="accent-1" color="black !important">
                                <h2><Validate/> Welcome {this.state.username}!</h2><h4>You have logged In successfully.</h4> </Box>
                                {/* <button onClick={ModalBox.close('success')}>Close</button> */}
                            </ModalBox>

                            <ModalBox id="register" handleRegister={this.props.handleRegister}>
                                <Box align="center" width="medium" pad="medium" height="85vh" round="medium" overflow="auto" background="black">
                                    <Register></Register>
                                </Box>
                                {/* <button onClick={ModalBox.close('register')}>Close</button> */}
                            </ModalBox>
                        </Box>
                        <Box align="center" justify="center" margin={{ "top": "small" }}>
                            <Text textAlign="center" justify="center" size="medium" color="grey" >
                                New to portal?
                            </Text>
                        </Box>
                        <Box style={{ alignItems: "center" }}>
                            <Button label="Request access" align="center"
                                onClick={ModalBox.open("register")} icon={<UserAdd color="white" />} margin={{ "top": "small", bottom: "medium" }} />
                        </Box></Form>
                </Box>
            </>
        )
    }
}
export default Login