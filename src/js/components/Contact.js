import React, { Component } from 'react'
import { Grid, Main, Box, Image, Text, Heading, Paragraph } from 'grommet'
import './../../App.css'
import logo from '../../img/contact.jpg';

const boxStyle = {
    "align": "center",
    "justify": "center", "direction": "column", "pad": "medium", "gap": "small",
    "fill": "horizontal", "background": '{{"color":"accent-4"}}',
    "border": '{{"color":"active-background","size":"medium","side":"all","style":"solid"}}',
    "elevation": "small", "round": "medium"
}
export default class Contact extends Component {
    render() {
        return (
            <Main fill="vertical" flex="grow" overflow="static" direction="column">
                <Box>
                    {/* align="center" justify="center" direction="column" pad="medium" gap="small" fill="horizontal" background={{ "color": "accent-4" }} border={{ "color": "active-background", "size": "medium", "side": "all", "style": "solid" }} elevation="small" round="medium"> */}
                    <Box height="50vh" margin={{ "top": "medium" }}>
                        <Image src={logo} fill="horizontal" fit="contain" opacity="strong" />
                    </Box>
                    <Text size="medium" textAlign="center" weight="bold" margin="small" color="graph-2">
                        Contact
                    </Text>
                </Box>
                <Box align="center" justify="center">
                    <Heading level="3" size="medium" textAlign="center" truncate={false}>
                        Your direct line to Us !
                    </Heading>
                </Box>
                <Box align="center">
                    <Box width="60vw" gap="small" align="center" direction="column">
                        <Box background="light-5" align="center" justify="center" direction="column" pad="small" gap="small" fill="horizontal"  elevation="small" round="medium">
                            <Heading level="3">Customer Service / Support</Heading>
                            <Paragraph size="medium">
                                Support contact form<br />support@abcd.de<br />+12 (0) 123 456 78 </Paragraph>
                        </Box>
                        <Box background="light-2" align="center" justify="center" direction="column" pad="small" gap="small" fill="horizontal"  elevation="small" round="medium">
                            <Heading level="3">Sales</Heading>
                            <Paragraph size="medium">
                                Support contact form<br />support@abcd.de<br />+12 (0) 123 456 78 </Paragraph>
                        </Box>
                        <Box background="light-4" align="center" justify="center" direction="column" pad="small" gap="small" fill="horizontal" elevation="small" round="medium">

                            <Heading level="3">Marketing / Press</Heading>
                            <Paragraph size="medium">
                                Marketing contact form<br />marketing@newtron.de </Paragraph>
                        </Box>
                        <Box  background="light-1" align="center" justify="center" direction="column" pad="medium" gap="small" fill="horizontal" elevation="small" round="medium">

                            <Heading level="3">Locations</Heading>
                            <Paragraph size="medium">
                                India <br /> Germany </Paragraph>
                        </Box>
                    </Box>
                </Box>


            </Main>
        )
    }
}
