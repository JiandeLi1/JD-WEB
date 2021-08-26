import React from 'react'
import Poster2 from '../img/Poster2.png'
import AnimatedShapes from './AnimatedShapes'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items: center;
    height:100vh;
`
const Left = styled.div`
    height: 100%;
    width: 50%;
`
const Image = styled.img`
    margin-top: 5vh;
    height: 80vh;
`

const Right = styled.div`
    width: 50%;
`

const Title = styled.span`
    font-size:30px;
`
const SubTitle = styled.span`
    font-size: 25px;
    font-style:italic;
    color:#888;
`
const Desc = styled.p`
    font-size: 20px;
    color:#333;
`
const Button = styled.button`
    font-size: 20px;
    color:white;
    font-weight:600;
    background-color: orange;
    padding:5px 10px;
    border: none;
    border-radius: 5px;
    outline: none;
`

export default function Feature() {
    return (
        <Container>
            <Left><Image src={ Poster2 } /> </Left>
            <Right>
                <Title>
                    <b>Good</b> Design
                    <br />
                    <b>Good</b> business
                </Title>
                <br />
                <br />
                <SubTitle>
                    We know that good design means good business.
                </SubTitle>
                <br /><br />
                <Desc>
                    We help our clients succeed by creating brand identities, digital
                    experiences, and print materials that communicate clearly, achieve
                    marketing goals, and look fantastic.
                </Desc>
                <br />
                <Desc>
                    We care your business and guarantee you to achieve marketing goals.
                </Desc>
                <br /><br />
                <Button>Learn more</Button>
            </Right>
            <AnimatedShapes />
        </Container>
    )
}
