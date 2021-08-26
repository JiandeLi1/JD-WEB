import React from 'react'
import styled, { css } from "styled-components"
import Navbar from './components/Navbar'
import Intro from "./components/Intro"
import Feature from './components/Feature';
import AnimatedShapes from "./components/AnimatedShapes"
import Service from './components/Service'
import Price from './components/Price'
import Contact from './components/Contact'
import Footer from './components/Footer'


const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position:relative;
`
const Shape = css`
    position:absolute;
    top:0;
    left:0;
    z-index: -1;
    width: 100%;
    height: 100%;
`
const IntoShape = styled.div`
    ${Shape};
    clip-path: polygon(72% 0, 100% 0%, 100% 100%, 47% 100%);
    background-color: orange;
`

const FeatureShape = styled.div`
    ${Shape};
    clip-path: polygon(0% 0, 47% 0%, 28% 100%, 0% 100%);
    background-color: orange;
`

const ServiceShape = styled.div`
    ${Shape};
    clip-path: polygon(0% 0, 28% 0%, 28% 100%, 0% 100%);
    background-color: orange;
`

const PriceShape = styled.div`
    ${Shape};
    clip-path: polygon(28% 0, 100% 0%, 100% 100%, 100% 100%);
    background-color: orange;
`

export default function App() {
    return (
        <>
            <Container>
                <Navbar />
                <Intro />
                <IntoShape />
                <AnimatedShapes />
            </Container>
            <Container>
                <Feature />
                <FeatureShape />
            </Container>
            <Container>
                <Service />
                <ServiceShape />
            </Container>
            <Container>
                <Price />
                <PriceShape />
            </Container>
            <Container>
                <Contact />
                <Footer />
            </Container>
        </>
    )
}
