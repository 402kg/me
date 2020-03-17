import styled from 'styled-components'
import { css } from 'emotion'

import { devices } from 'services/media'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
    width: 280px;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, .17);
    border-radius: 2px;
    padding: 25px 0 0;
    position: sticky;
    transition: padding .2s ease;
    top: 2vh;
    flex-shrink: 0;

    @media ${devices.mobile.l} {
        position: static;
    }
`

export const Photo = styled.img`
    display: flex;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 0 0 35px;
    margin-top: ${({ sticky }) => (sticky ? '0' : '-100px')};
    transition: margin-top .2s ease-in 0s;

    @media ${devices.mobile.l} {
        margin-top: ${({ sticky }) => (sticky ? '0' : '0')};
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
`

export const Name = styled.div`
    font-size: 28px;
    margin: 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`

export const Position = styled.div`
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 41px;
    border-radius: 42px;
    padding: 0 25px;
    margin: 0 0 30px;
    color: rgba(68, 86, 108, .7);
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgb(248, 250, 251);
    padding: 30px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
`

export const Link = styled.a`
    color: rgb(0, 130, 255);

    &:visited {
        color: rgb(0, 130, 255);
    }

    &:hover {
        color: rgb(0, 100, 255);
    }

    transition: color .2s ease;
`

export const LinkItem = styled.span`
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`

export const IconClassName = css`
    margin-right: 10px;
`

export default { }
