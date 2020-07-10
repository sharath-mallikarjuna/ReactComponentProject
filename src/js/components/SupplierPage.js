import React, { Component } from 'react';
import { Grid, Box} from 'grommet';
import Suppliers from './Suppliers';
import SupplierDetails from './SupplierDetails';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        selectedSupplier: state.selectedSupplier,
    };
  };
class SupplierPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const{selectedSupplier}=this.props;
        return (
            <Box fill background="black" overflow="auto" round="xsmall">
                <Grid
                    fill
                    rows={["auto", "flex"]}
                    columns={["auto", "flex"]}
                    gap="small"
                    areas={[
                        { name: "supplier", start: [0, 1], end: [0, 1] },
                        { name: "supplierDetails", start: [1, 1], end: [1, 1] }
                    ]}
                >
                    <Box gridArea="supplier" background="black"> <Suppliers></Suppliers></Box>
                    <Box gridArea="supplierDetails" background="black"> <SupplierDetails val={selectedSupplier}></SupplierDetails></Box>
                </Grid>
            </Box>
        );
    }
}
export default connect(mapStateToProps)(SupplierPage)
