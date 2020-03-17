import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'feather-react'

import {
    Container,
    Description,
    IconClassName,
    Link,
    LinkItem,
    Links,
    Name,
    Photo,
    Position,
} from './styled'

const Aside = ({ sticky }) => (
    <Container>
        <Photo
            sticky={sticky}
            alt="Iakov Salikov"
            src="https://avatars1.githubusercontent.com/u/36078770?v=4" />
        <Description>
            <Name>Iakov Salikov</Name>
            <Position>Software Engineer</Position>
        </Description>
        <Links>
            <LinkItem>
                <Icon size={22} className={IconClassName}>github</Icon>
                <Link
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://github.com/iknpx">
                    github.com/iknpx
                </Link>
            </LinkItem>

            <LinkItem>
                <Icon size={22} className={IconClassName}>box</Icon>
                <Link
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://npmjs.com/~iknpx">
                    npmjs.com/~iknpx
                </Link>
            </LinkItem>

            <LinkItem>
                <Icon size={22} className={IconClassName}>edit-3</Icon>
                <Link
                    target="__blank"
                    rel="noopener noreferrer"
                    href="mailto:isalikov@pm.me">
                    isalikov@pm.me
                </Link>
            </LinkItem>
        </Links>
    </Container>
)

Aside.propTypes = {
    sticky: PropTypes.bool.isRequired,
}

export default Aside
