import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
    Container,
    ContextItem,
    Description,
    ProgressContainer,
    ProgressValue,
    Title,
} from './styled'

const SkillItem = ({
    conext,
    title,
    value,
    delay,
}) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setTimeout(() => setWidth(value), delay)
    }, [value])

    return (
        <Container>
            <Title>{title}</Title>
            <ProgressContainer>
                <ProgressValue width={width} />
            </ProgressContainer>
            <Description>
                {conext.map((item) => (
                    <ContextItem key={Math.random()}>{item}</ContextItem>
                ))}
            </Description>
        </Container>
    )
}

SkillItem.defaultProps = {
    delay: 0,
}

SkillItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    delay: PropTypes.number,
    conext: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default SkillItem
