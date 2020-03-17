import React from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    Line,
    Title,
} from './styled'

const Heading = ({ children, lined }) => (
    <Container>
        <Title lined={lined}>
            {children}
        </Title>
        {lined && <Line />}
    </Container>
)

Heading.defaultProps = {
    lined: false,
}

Heading.propTypes = {
    lined: PropTypes.bool,
}

export default Heading
