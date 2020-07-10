import React, { Component } from 'react'
import { Grommet, Main, Box, Image, Text, Heading, Paragraph, Carousel, Clock } from 'grommet'
import logo from '../../img/home.jpg';
import img1 from '../../img/background3.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';

var sectionStyle = {
    // width: "inherit",
    height: '100%',
    backgroundImage: `url(${logo})`,
    overflow: "static",
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
};
export default class About extends Component {
    render() {
        return (
            <section style={sectionStyle}> <Clock type="digital" justify="right" />
                <Box fill={true} align="center" flex="grow">
                    <Box background="white" justify="center" gap="xsmall" margin="xsmall" round="small">
                        <Text size="xlarge" textAlign="center" pad="xxsmall" weight="bold" margin="xsmall" color="black">
                            ABOUT    </Text>
                    </Box>
                    <Box height="small" margin="small" width="large" overflow="hidden" background="color">
                        <Carousel fill>                           
                            <Image fit="auto" src={img3} />
                            <Image fit="auto" src={img2} />
                            <Image fit="auto" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                            <Image fit="auto" src={img1} />
                            {/* <Image fit="auto" src="//v2.grommet.io/assets/IMG_4210.jpg" /> */}
                        </Carousel></Box>
                    <Box align="center" justify="center" margin="xsmall" >
                        <h2>OUR VISION</h2>
                        <Box pad="xsmall" background="darkgrey" justify="center" round="small" >
                            <h3>
                                “Trade smart”- comprehensible and for everyone!
                                It is with a bold and ambitious vision that we define the long-term direction of our company and enable our customers to benefit from a rewarding, continuous partnership.
                            </h3></Box>
                    </Box>   </Box>
            </section>
            //   </Main> 
            //  </Grommet>
        )
    }
}
