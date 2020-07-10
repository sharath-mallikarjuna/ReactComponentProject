import React from 'react'
import { Grommet, Box, Button, Heading, Text, Paragraph } from 'grommet'
import { Previous } from 'grommet-icons'


export default () => {    
  return (
          <Box background="darkcyan" round="medium" align="center" justify="center" pad="xsmall" margin="xsmall">        
              <Box align="center" justify="center" pad="small" margin="medium" background={{"dark":false,"color":"light-2","image":"url('https://avatars0.githubusercontent.com/u/1753301?s=460&v=4\n')"}} round="full" />
              <Heading level="3" size="medium" margin="xsmall" textAlign="center">
                Chris Carlozzi
              </Heading>
              <Text textAlign="center">
                Product Designer
              </Text>
              <Paragraph size="small" margin="medium" textAlign="center">
                I'm a  designer in SF. I work with folks that are innovators willing to make the next big idea. What do you want to make?
              </Paragraph>
              <Box align="center" justify="center" pad="small" direction="row-responsive" flex={true} alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
                <Button label="Portfolio" primary={true} plain={false} />
              </Box>
            {/* </Box> */}
          {/* </Box> */}
         
         
      </Box>
    // </Grommet>
  )
}
