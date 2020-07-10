import React, { Component } from 'react'
import { Grommet, Form, FormField, TextInput,Box,Text, CheckBox, Paragraph, Button } from 'grommet'
import { FormEdit, Mail, Lock, UserAdd } from 'grommet-icons'
import { ModalBox } from './ModalBox';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "firstname": '', "lastname": '', "email": '', "password": '', "repassword": '', "checked": true,
            "errors": { firstname: '', lastname: '', email: '', password: '', repassword: '', checked: '' }
        }
    }

    handleChange = (event) => {
        event.preventDefault();       
        let errors = this.state.errors;
        const { name, value } = event.target;
        switch (name) {
            case 'firstname':
                errors.firstname =
                    value.length < 5
                        ? 'First name must be 5 characters long!'
                        : '';
                break;
            case 'lastname':
                errors.lastname =
                    value.length < 3
                        ? 'Last name must be 3 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    value.length < 8
                        ? 'enter valid mail!'
                        : '';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            case 'repassword':
                errors.repassword =
                    value !== this.state.password
                        ? 'Re entered password does not match!'
                        : '';
                break;
            case 'checked':
                errors.checked =
                    value == false
                        ? 'Please accept terms of use!'
                        : '';
                break;
            default:
                break;
        }
        const valueState = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: valueState
        });
    }
    handleSubmitReg = (event) => {
        event.preventDefault();
        if (this.validateFormReg(this.state.errors)) {
            console.log('reset')
            this.setState({...this.state,[event.target.name]:""});
            this.inputElementReg.click();
            this.inputElementNew.click();
        } else {
            alert("Unable to Register! Invalid details.");
        }
    }
    validateFormReg = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }
    render() {
        const { errors } = this.state;
        return (
            <> <Box alig="center" margin="xxsmall" justify="center" pad="medium" background="accent-1" color="white">
            <Text size="large"><strong>Register new User</strong></Text>
        </Box>
            <Form id="regForm" onSubmit={this.handleSubmitReg}>
                <FormField label="First Name" color="accent-1" name="firstname">
                    <TextInput placeholder="Enter your name" name="firstname" value={this.state.firstname} required onChange={this.handleChange} size="medium" type="text" icon={<FormEdit />} />
                    {errors.firstname.length > 0 && <span className='error'>{errors.firstname}</span>}

                </FormField>
                <FormField label="Last Name" name="lastname" color="accent-1">
                    <TextInput icon={<FormEdit />} name="lastname" value={this.state.lastname} required onChange={this.handleChange} placeholder="Enter your last name" name="lastname" />
                    {errors.lastname.length > 0 && <span className='error'>{errors.lastname}</span>}

                </FormField>
                <FormField label="Email" name="email" >
                    <TextInput placeholder="Enter your email address" value={this.state.email} required onChange={this.handleChange} name="email" icon={<Mail />} />
                    {errors.email.length > 0 && <span className='error'>{errors.email}</span>}

                </FormField>
                <FormField label="Password" color="accent-1" name="firstname" value={this.state.password} required onChange={this.handleChange} name="password" >
                    <TextInput icon={<Lock />} placeholder="Choose password" name="password" required onChange={this.handleChange} type="password" />
                    {errors.password.length > 0 && <span className='error'>{errors.password}</span>}

                </FormField>
                <FormField label="Re-enter Password" >
                    <TextInput type="password" icon={<Lock />} name="repassword" value={this.state.repassword}required onChange={this.handleChange} placeholder="Enter your password again" />
                    {errors.repassword.length > 0 && <span size="12" className='error'>{errors.repassword}</span>}

                </FormField>
                <FormField>
                    <CheckBox name="checked" required onChange={this.handleChange} />
                    <Paragraph fill={true} size="medium" color="active-text">
                        I accept the Terms of  Use and Privacy Policy
        </Paragraph>
                    {errors.checked.length > 0 && <span className='error'>{errors.checked}</span>}
                </FormField>


                <Button label="Register Now" type="submit" icon={<UserAdd />} active={true} fill="horizontal" gap="small" hoverIndicator={true} plain={false} primary={false} reverse={false} secondary={false} size="large" color="graph-3"
                />
                <div onClick={ModalBox.close("register")} ref={input => this.inputElementReg = input}></div>
                <div onClick={ModalBox.open("success_reg")} ref={input => this.inputElementNew = input}></div>
                <ModalBox id="success_reg">
                    {/* <Button onClick={ModalBox.close('success_reg')}>Close</Button> */}
                    <Box alignItems="center" width="medium" pad="medium" height="25vh" overflow="auto" background="accent-1" color="black">
               
                    <h2>Hi ! User Registered successfully</h2></Box>

                </ModalBox>
            </Form>
            </>
        )
    }
}
export default Register;
