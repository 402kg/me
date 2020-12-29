import React from 'react'

import Heading from 'components/Heading'

import {
    Container,
    Text,
} from './styled'

const About = () => (
    <Container>
        <Heading lined>About</Heading>
        <Text>
            Software Engineer with skills in SaaS development.
            <br />
            Interested in Open Source projects at first.
            <br />
            More details, in github profile.
        </Text>
    </Container>
)

export default About
