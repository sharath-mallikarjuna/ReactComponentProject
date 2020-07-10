import React, { Component } from 'react';
import { Grommet, Box, DataTable, Meter, Text, Button } from 'grommet';
import { connect } from 'react-redux';
import { DoughnutChart } from 'grommet-controls/chartjs';
import { VerticalMenu } from 'grommet-controls';
import { Icons } from 'grommet-icons'


const mapStateToProps = state => {
    return {
        companies: state.companies,
    };
};
// function mapDispatchToProps(dispatch) {
//     return {
//         getData_Companies:()=>dispatch(getData_Companies())
//     };
//   }


class Reports extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { companies } = this.props;
        const Badge = ({ label, background = 'light-3' }) => (
            <Box
                background={background}
                pad={{ horizontal: 'small' }}
                border='all'
                style={{ borderRadius: '20%' }}
            >
                <Text size='small'>
                    {label}
                </Text>
            </Box>
        );

        const createFolder = () => (
            <Box>
                <Button href='#' onClick={this.handleClick_Suppliers} hoverIndicator>
                    <Box width="6vw" background="darkcyan" round="small" gap="xsmall" align="center" justify="center">
                        <Text margin="xsmall" size="small"> <strong>Google drive</strong></Text>
                    </Box>
                </Button>

            </Box>
        )
        return (
            <Box>
                <VerticalMenu
                    activeItem={{ id: 'c_drive' }}
                    items={[
                        {
                            id: 'local',
                            label: 'Local',
                            items: [
                                { id: 'c_drive', href: '/c_drive', label: 'C: drive' },
                                { id: 'f_drive', onClick: () => alert('Clicked F drive'), label: 'F: drive' },
                            ],
                        },
                        {
                            id: 'cloud',
                            label: 'Cloud',
                            items: [
                                { id: 'drop_box', href: '/drop_box', label: 'DropBox' },
                                { id: 'google_drive', onClick: () => this.createFolder(), label: 'Google drive' },
                            ],

                        },
                    ]}
                />

            </Box>


            // <Box margin="small" round="medium" height="80vh" align='center' pad='large' background="cadetblue">
            //     <DoughnutChart
            //         data={{
            //             labels: ["January", "February", "March", "April", "May", "June", "July"],
            //             datasets: [
            //                 {
            //                     label: "Dataset 1",
            //                     data: [-93, 45, 35, -33, 8, 88, -62],
            //                 }
            //             ],
            //         }}
            //         options={{
            //             legend: {
            //                 display: true,
            //             },
            //             themedData: true,
            //         }}
            //     />    </Box>

        );
    }
}

export default (Reports);