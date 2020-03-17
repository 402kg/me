import styled from 'styled-components'
import { css } from 'emotion'

export const Container = styled.div`
    display: flex;
    background-color: #FFF;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, .17);
    padding: 25px;
    flex-shrink: 0;
    flex-direction: column;
    margin: 0 0 30px;
`

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 0 10px 25px;
    margin: 0 0 25px;

    &:before {
        content: '';
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: rgb(0, 129, 255);
        position: absolute;
        left: 0;
        border: 3px solid #D7EAFE;
    }

    &:after {
        content: '';
        background-color: #D7EAFE;
        width: 1px;
        height: 100%;
        position: absolute;
        left: 8px;
        top: 21px;
    }
`

export const Description = styled.p`
    line-height: 1.9em;
    margin: 0 0 15px;
`

export const LinkItem = styled.span`
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 5px;
    }
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 15px;
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

export const Stack = styled.div`
    display: flex;
    flex-direction: column;
`

export const Name = styled.span`
    font-size: 16px;
    margin: 0 0 4px;
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 600;
`

export const IconClassName = css`
    margin-right: 10px;
`

export const Date = styled.span`
    font-size: 12px;
    margin-bottom: 15px;
`

export const Subtitle = styled.span`
    font-size: 13px;
    margin-bottom: 5px;
    font-weight: 600;
`

export const StackItem = styled.span`
    display: flex;
    align-items: center;

    &:before {
        content: '';
        width: 10px;
        height: 1px;
        background-color: rgba(0, 0, 0, .3);
        margin: 0 5px 0 0;
    }
`

export default { }
