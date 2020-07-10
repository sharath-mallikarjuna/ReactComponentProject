import React,{Component} from 'react';
import {Grommet,Box,DataTable,Meter,Text} from 'grommet';
import { connect } from 'react-redux';
import { getData_Companies } from '../actions';

const mapStateToProps = state => {
  return {
      companies: state.companies,
  };
};
function mapDispatchToProps(dispatch) {
  return {
      getData_Companies:()=>dispatch(getData_Companies())
  };
}

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});
 
const columns = [
  {
    property: 'name',
    header: <Text>Name with extra</Text>,
    primary: true,
    footer: 'Total'
  },
  {
    property: 'location',
    header: 'Location'
  },
  {
    property: 'date',
    header: 'Date',
    render: datum =>
      datum.date && new Date(datum.date).toLocaleDateString('en-US'),
    align: 'end'
  },
  {
    property: 'percent',
    header: 'Percent Complete',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness='small'
          size='small'
        />
      </Box>
    )
  },
  {
    property: 'paid',
    header: 'Paid',
    render: datum => amountFormatter.format(datum.paid / 100),
    align: 'end',
    aggregate: 'sum',
    footer: { aggregate: true }
  }
];


class Companies extends Component{
  constructor(props){
    super(props);
    this.state={ companies:[]}
  }
  componentDidMount() {
    this.props.getData_Companies();
}

  render(){
    const { companies }=this.props;
    return(
    <Box align='center' height="80vh" margin="small" round="medium" pad='large' background="#43968D">
      <DataTable border="black" round="small" columns={columns} data={companies} />
    </Box>    
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Companies);