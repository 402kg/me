import React from 'react'

import Heading from 'components/Heading'
import SkillItem from 'components/SkillItem'

import {
    Container,
    List,
} from './styled'

import source from './source.json'

const Skills = () => (
    <Container>
        <Heading>Skills</Heading>
        <List>
            {source.map((skill, index) => (
                <SkillItem
                    key={skill.id}
                    delay={index * 100}
                    value={skill.value}
                    title={skill.title}
                    conext={skill.conext} />
            ))}
        </List>
    </Container>
)

export default Skills
