import React, { useEffect, useRef, useState } from 'react'
import { hot } from 'react-hot-loader/root'

import About from 'components/About'
import Aside from 'components/Aside'
import Content from 'components/Content'
import Document from 'components/Document'
import Feed from 'components/Feed'
import Layer from 'components/Layer'
import Projects from 'components/Projects'
import Skills from 'components/Skills'

document.title = 'Iakov Salikov - Software Engineer'

const App = () => {
    const layerRef = useRef(null)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        layerRef.current.addEventListener('scroll', (event) => {
            if (event.target.scrollTop > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    })

    return (
        <>
            <Document />
            <Layer ref={layerRef}>
                <Content>
                    <Aside sticky={sticky} />
                    <Feed>
                        <About />
                        <Skills />
                        <Projects />
                    </Feed>
                </Content>
            </Layer>
        </>
    )
}

export default hot(App)
