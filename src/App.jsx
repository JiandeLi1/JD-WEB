import React from 'react'
import styled from "styled-components"
import Navbar from './components/Navbar'
import Intro from "./components/Intro"
const Container = styled.div`
    height: 100vh;
    overflow: hidden;
`

const IntoShape = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index: -1;
    width: 100%;
    height: 100%;
    clip-path: polygon(72% 0, 100% 0%, 100% 100%, 47% 100%);
    background-color: orange;
`

export default function App() {
    return (
        <Container>
            <Navbar />
            <Intro />
            <IntoShape />
        </Container>
    )
}
