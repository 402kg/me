import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
`

export const Title = styled.span`
    font-size: 20px;
    margin: 0 0 ${({ lined }) => (lined ? '20px' : '5px')} 0;
`

export const Line = styled.div`
    width: 50px;
    height: 2px;
    background-color: rgba(0, 129, 255);
`

export default { }
