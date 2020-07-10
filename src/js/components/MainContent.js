import React, { Component } from 'react'
import { Grommet, Main, Box, Image, Heading, Paragraph, Tabs, Tab, WorldMap } from 'grommet'
import { Action, Achievement, Aggregate, Ad } from 'grommet-icons'
import logo from '../../img/b9.PNG';

export default class MainContent extends Component {
    render() {
        return (
            <>
                <Main fill="vertical" overflow="auto">
                    <Box overflow="auto" >
                        <Box align="center" justify="center" pad="small" margin="small" height="40vh">
                            <Image src={logo} style={{"width": "100%", "height":"100%"}} />
                            {/* // "https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" fill="horizontal" fit="cover" /> */}
                        </Box>
                        <Box align="center" justify="center" gap="small" margin="small" display="inline" >
                            <Heading level="2" truncate={false} 
                            style={{"padding-top": "2px;","margin-bottom": "0px","margin-top": "0px"}}>
                                4 steps to gain full control over your supply chain.  </Heading>
                            <Paragraph size="xlarge" fill={true} color="accent-4" textAlign="center" pad="xsmall"
                            style={{"padding-top": "2px;","margin-bottom": "0px","margin-top": "0px"}}>
                                Shared supply chain collaboration platform connects you with your global business partners and ensures the long-term success of your suppliers
          </Paragraph>
                       
                            {/* <Tabs justify="center" style={{"padding-top": "inherit","margin-bottom": "0px","margin-top": "0px"}}> */}
                                <Box background="white" gap="small" direction="column">
                                <Tab title="ASSESS RISK AND IMPACT" icon={<Action />} />
                                <Tab title="ENSURE BUSINESS CONTINUITY" icon={<Achievement />} />
                                <Tab title="BUILT ON SUPPLY CHAIN COLLABORATION" icon={<Aggregate />} />
                                <Tab title="INTEGRATE TRANSPORTATION AND PRODUCTION" icon={<Ad />} />
                                </Box> 
                            {/* </Tabs>                             */}
                        </Box>
                        <Box Box align="center" justify="center" pad="medium" gap="small" margin="small" display="inline">
                            <WorldMap color="graph-2" fill="horizontal" hoverColor="accent-4" display="inline"/>
                            </Box>
                    </Box>
                </Main>
            </>
        );
    }
}