import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    &:not(:last-child) {
        margin: 0 0 20px;
    }
`

export const Title = styled.span`
    display: flex;
    font-size: 14px;
    margin: 0 0 10px;
    user-select: none;
    color: rgba(68, 86, 108, .6);
`

export const ProgressContainer = styled.div`
    display: flex;
    height: 2px;
    width: 100%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .1);
    overflow: hidden;
    margin: 0 0 10px;

`

export const ProgressValue = styled.div`
    width: ${({ width }) => width}%;
    height: 100%;
    background-color: rgba(0, 129, 255);
    transition: width .5s ease;
`

export const Description = styled.p`
    line-height: 1.8em;
    font-size: 12px;
`

export const ContextItem = styled.span`
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
