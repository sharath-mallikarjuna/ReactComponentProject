import React, { Component } from 'react';
import { Button, Heading, Box, Text, Paragraph } from 'grommet'
import SupplierDetails from './SupplierDetails'
import axios from 'axios'
import '../../App.css';
import { connect } from 'react-redux';
import { setSelectedSupplier,getData } from '../actions';

const mapStateToProps = state => {
    return {
        selectedSupplier: state.selectedSupplier,
        suppliers:state.suppliers
    };
};
function mapDispatchToProps(dispatch) {
    return {
        setSelectedSupplier: (id) => dispatch(setSelectedSupplier(id)),
        getData:()=>dispatch(getData())
    };
}

class Suppliers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedSupplier: 1,
        }
        this.supplierList = [];
    }

    componentDidMount() {
        this.getSupplierData();
        this.props.getData();
    }

    getSupplierData() {
        axios.get('assets/supplierlist.json').then(response => {
            // this.setState({ supplierList: response.data })
        })
    };
    handlerSetSelectedSupplier=(event)=> {
        const id=event.target.value;
        console.log(event.target.value + "supplier id")
        this.props.setSelectedSupplier(id);
    }
    render() {
        const { selectedSupplier, setSelectedSupplier ,suppliers} = this.props;
        if (!suppliers)
            return (<div>Loading data</div>);

        return (
            <Box>
                <div >
                    {
                        suppliers.map(supplier =>
                            <Box background="#43968D" round="medium" align="center" justify="center" pad="xsmall" margin="xsmall">
                                <Box pad="small" margin="xsmall" background={{ "dark": false, "color": "light-2", "image": "url('https://avatars0.githubusercontent.com/u/1753301?s=460&v=4\n')" }} round="full" />
                                <Heading level="4" size="medium" margin="xsmall" textAlign="center">
                                    {supplier.name}
                                </Heading>
                                <Text >
                                {supplier.id}
                                    {supplier.email}
                                    {supplier.phone}
                                    
                                </Text>
                                <Box align="center" justify="center" pad="small" direction="row-responsive" flex={true} alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
                                    <Button label="Click to View Details" primary={true} plain={false}
                                     value={supplier.id}   onClick={this.handlerSetSelectedSupplier} />
                                </Box>

                            </Box>
                            // <Box bsStyle="info" key={supplier.name} className="centeralign" background="white">
                            //     <Heading>{supplier.name}
                            //         {/* <Heading.Title componentClass="h3">{supplier.name}</Heading.Title> */}
                            //     </Heading>
                            //     <Box background="white">
                            //         <p>{supplier.email}</p>
                            //         <p>{supplier.phone}</p>
                            //         <Button bsStyle="info"
                            //         onClick={() => this.setState({ selectedSupplier: supplier.id })}>
                            //             Click to View Details </Button>
                            //     </Box>
                            // </Box>
                        )
                    }
                </div>
                {/* <div className="col-md-6"> detailssssssss
                 <SupplierDetails val={this.state.selectedSupplier} />
            </div> */}
            </Box>
        );
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);