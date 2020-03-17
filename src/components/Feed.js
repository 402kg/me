import styled from 'styled-components'

import { devices } from 'services/media'

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 30px;
    width: 100%;

    @media ${devices.mobile.l} {
        margin: 45px 0 0 0;
    }
`

export default Feed
