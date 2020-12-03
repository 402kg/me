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
            <Name>Canary.icu</Name>
            <Date>November 2020</Date>
            <Description>
                Canarian news Telegram bot
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>link</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://canary.icu">
                        Telegram channel
                    </Link>
                </LinkItem>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/isalikov/canary.icu-api">
                        Source (API)
                    </Link>
                </LinkItem>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/isalikov/canary.icu-bot">
                        Source (BOT)
                    </Link>
                </LinkItem>

            </Links>
            <Stack>
                <Subtitle>Stack:</Subtitle>
                <StackItem>Telegram API</StackItem>
                <StackItem>Golang/gin</StackItem>
                <StackItem>Docker/Drone.io</StackItem>
            </Stack>
        </Project>

        <Project>
            <Name>hq-cropper</Name>
            <Date>October 2020</Date>
            <Description>
                Lightweight (20kb) cropper tool for High Quality images
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/isalikov/hq-cropper">
                        Source (npm package)
                    </Link>
                </LinkItem>

            </Links>
            <Stack>
                <Subtitle>Stack:</Subtitle>
                <StackItem>Pure JavaScript</StackItem>
            </Stack>
        </Project>

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
                        href="https://github.com/isalikov/moviex-web">
                        Source (Web Application)
                    </Link>
                </LinkItem>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/isalikov/moviex-api">
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
                        href="https://github.com/isalikov/steamx-web">
                        Source (Web Application)
                    </Link>
                </LinkItem>

                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/isalikov/steamx-api">
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
                        href="https://github.com/isalikov/json-joi">
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
                        href="https://github.com/isalikov/nats-cli">
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
                        href="https://github.com/isalikov/archnode">
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
            <Name>Express Rest</Name>
            <Date>June 2019</Date>
            <Description>
                Express.js rest-api boilerplate with authentication layer
            </Description>
            <Links>
                <Subtitle>Links:</Subtitle>
                <LinkItem>
                    <Icon size={14} className={IconClassName}>github</Icon>
                    <Link
                        target="__blank"
                        rel="noopener noreferrer"
                        href="https://github.com/isalikov/express">
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
                        href="https://github.com/isalikov/feather-react">
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
