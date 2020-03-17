import styled from 'styled-components'

import { devices } from 'services/media'

const Content = styled.div`
    display: flex;
    width: 940px;
    margin: 15vh 0 0;
    align-items: flex-start;

    @media ${devices.laptop.m} {
        width: 80%;
    }

    @media ${devices.tablet} {
        width: 95vw;
    }

    @media ${devices.mobile.l} {
        width: 300px;
        margin: 2vh 0 0;
        flex-direction: column;
        align-items: center;
    }
`

export default Content
