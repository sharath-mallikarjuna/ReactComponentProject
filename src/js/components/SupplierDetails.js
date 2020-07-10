import React, { Component } from 'react';
import { Button, Heading, Box, Body } from 'grommet'
// import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class SupplierDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.supplierDetails = {};
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getSupplierDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getSupplierDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getSupplierDetails(id) {
    axios.get("assets/supplier" + id + ".json").then(response => {
      console.log("res " + response);
      this.setState({ supplierDetails: response })
    })
  };

  render() {
    if (!this.state.supplierDetails)
      return (<p>Loading Data</p>)
    return (<div className="supplierdetails">
      <Box bsStyle="info" className="centeralign">
        {/* <Heading>
          <Heading.Title componentClass="h3">{this.state.supplierDetails.data.name}</Heading.Title>
        </Heading> */}
         <Box margin={{"top":"xsmall"}} border="true"width="66vw" round="small" elevation="small" pad="small" background="cadetblue">
          <Box border="all" margin="medium" pad="small"> 
            <h2>Supplier Details</h2>
            <p>Name : {this.state.supplierDetails.data.name}</p>
            <p>Email : {this.state.supplierDetails.data.email}</p>
            <p>Phone : {this.state.supplierDetails.data.phone}</p>
            <p>City : {this.state.supplierDetails.data.city}</p>
            <p>State : {this.state.supplierDetails.data.state}</p>
            <p>Country : {this.state.supplierDetails.data.country}</p>
            <p>Organization : {this.state.supplierDetails.data.organization}</p>
            <p>Job Profile : {this.state.supplierDetails.data.jobProfile}</p>
            <p>Additional Info : {this.state.supplierDetails.data.additionalInfo}</p>
          </Box>
        </Box>
      </Box>
    </div>)
  }
}
