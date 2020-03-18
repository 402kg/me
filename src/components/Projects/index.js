import React from 'react'
import Icon from 'feather-react'

import Heading from 'components/Heading'

import {
    Container,
    Date,
    Description,
    Link,
    LinkItem,
    Links,
    Name,
    Project,
    IconClassName,
    StackItem,
    Stack,
    Subtitle,
} from './styled'

const Projects = () => (
    <Container>
        <Heading lined>Projects</Heading>
        <Project>
            <Name>The MovieDB Finder</Name>
            <Date>October 2018</Date>
            <Description>
                The MovieDB API based web application for discover movies.
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>link</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://moviex.dayler.dev">
                        Website
                    </Link>
                </LinkItem>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iknpx/moviex-web">
                        Source (Web Application)
                    </Link>
                </LinkItem>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iknpx/moviex-api">
                        Source (API)
                    </Link>
                </LinkItem>
            </Links>
            <Stack>
                <Subtitle>Stack:</Subtitle>
                <StackItem>React 16</StackItem>
                <StackItem>Redux</StackItem>
                <StackItem>React Router</StackItem>
                <StackItem>Socket.io</StackItem>
                <StackItem>Stylus</StackItem>
                <StackItem>Node.js</StackItem>
                <StackItem>Heroku</StackItem>
                <StackItem>Drone</StackItem>
            </Stack>
        </Project>

        <Project>
            <Name>Steamex</Name>
            <Date>August 2018</Date>
            <Description>
                Steam API Based tool for finding multiplayer games between multiple accounts.
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>link</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://steamx.dayler.dev">
                        Website
                    </Link>
                </LinkItem>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iknpx/steamx-web">
                        Source (Web Application)
                    </Link>
                </LinkItem>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iknpx/steamx-api">
                        Source (API)
                    </Link>
                </LinkItem>
            </Links>
            <Stack>
                <Subtitle>Stack:</Subtitle>
                <StackItem>React 16</StackItem>
                <StackItem>Redux</StackItem>
                <StackItem>React Router</StackItem>
                <StackItem>Socket.io</StackItem>
                <StackItem>Stylus</StackItem>
                <StackItem>Node.js</StackItem>
                <StackItem>MongoDB</StackItem>
                <StackItem>Heroku</StackItem>
                <StackItem>Drone</StackItem>
            </Stack>
        </Project>

        <Project>
            <Name>Json Joi</Name>
            <Date>May 2019</Date>
            <Description>
                JSON to Joi Schema converter
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>
                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iknpx/json-joi">
                        Source
                    </Link>
                </LinkItem>
            </Links>
            <Stack>
                <Subtitle>Stack:</Subtitle>
                <StackItem>Joi</StackItem>
                <StackItem>Jest</StackItem>
                <StackItem>Drone</StackItem>
            </Stack>
        </Project>

        <Project>
            <Name>Storybook</Name>
            <Date>November 2019</Date>
            <Description>
                React library boilerplate. Ready to start create your own react components library.
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>
                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iknpx/storybook">
                        Source
                    </Link>
                </LinkItem>
            </Links>
            <Stack>
                <Subtitle>Stack:</Subtitle>
                <StackItem>React</StackItem>
                <StackItem>React Storybook</StackItem>
                <StackItem>Styled Components</StackItem>
                <StackItem>Babel</StackItem>
                <StackItem>Drone</StackItem>
            </Stack>
        </Project>

        <Project>
            <Name>Nats cli</Name>
            <Date>March 2020</Date>
            <Description>
                Command line tool for debug nats.io
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>
                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iknpx/nats-cli">
                        Source
                    </Link>
                </LinkItem>
            </Links>
            <Stack>
                <Subtitle>Stack:</Subtitle>
                <StackItem>Golang</StackItem>
            </Stack>
        </Project>

        <Project>
            <Name>Archnode</Name>
            <Date>July 2019</Date>
            <Description>
                Full featured archlinux based nodejs docker image
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>
                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iknpx/archnode">
                        Source
                    </Link>
                </LinkItem>
            </Links>
            <Stack>
                <Subtitle>Stack:</Subtitle>
                <StackItem>Docker</StackItem>
            </Stack>
        </Project>

        <Project>
            <Name>Express boilerplate</Name>
            <Date>June 2019</Date>
            <Description>
                Express.js boilerplate with authentication layer
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>
                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iknpx/express">
                        Source
                    </Link>
                </LinkItem>
            </Links>
            <Stack>
                <Subtitle>Stack:</Subtitle>
                <StackItem>ES7</StackItem>
                <StackItem>Node.js</StackItem>
                <StackItem>Express</StackItem>
                <StackItem>Mongoose</StackItem>
                <StackItem>Docker</StackItem>
                <StackItem>Drone</StackItem>
            </Stack>
        </Project>

        <Project>
            <Name>Feather React</Name>
            <Date>April 2019</Date>
            <Description>
                The simplest way to start using feather icons as React component
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>
                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/iknpx/feather-react">
                        Source
                    </Link>
                </LinkItem>
            </Links>
            <Stack>
                <Subtitle>Stack:</Subtitle>
                <StackItem>React</StackItem>
                <StackItem>Feathericons</StackItem>
                <StackItem>Docker</StackItem>
                <StackItem>Drone</StackItem>
            </Stack>
        </Project>
    </Container>
)

export default Projects
