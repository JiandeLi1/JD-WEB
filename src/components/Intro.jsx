import React from 'react'
import styled from "styled-components"
import Poster from '../img/Poster.png'

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
    @media only screen and (max-width:480px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    @media only screen and (max-width:480px){
        width: 100%;
        height: 100%;
    }
`
const Title = styled.h1`
    width:60%;
    font-size:60px;
    padding:20px 0;
    @media only screen and (max-width:480px){
        font-size:50px;
        width: 100%;
    }
`
const Desc = styled.p`
    width:60%;
    font-size:20px;
    @media only screen and (max-width:480px){
        font-size:18px;
        width: 100%;
    }
`
const Info = styled.div`
  display:flex;
  justify-content: space-between;
  width: 60%;
  padding:30px 0;
  @media only screen and (max-width:480px){
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`
const Button = styled.button`
    padding:10px;
    color:white;
    font-size: 700;
    letter-spacing: 1px;
    background-color: orange;
    border:none;
    border-radius: 5px;
    outline:none;
    cursor: pointer;
    @media only screen and (max-width:480px){
        margin-bottom: 10px;
        background-color:#2d61f1;
    }
`

const Contact = styled.div`
  display:flex;
  flex-direction: column;
`
const Phone = styled.span`
  font-weight: bold;
  color:orange;
  @media only screen and (max-width:480px){
        color:#2d61f1;
        text-align: center;
    }
`

const ContactText = styled.span`
    margin-top: 5px;
    color:gray;
`

const Right = styled.div`
    margin: auto;
    width: 40%;
    @media only screen and (max-width:480px) {
        display: none;
    }
`
const Image = styled.img`
    width: 100%;
`
export default function Intro() {
    return (
        <Container>
            <Left>
                <Title>
                    Adventures in the creative age
                </Title>
                <Desc>
                    We believe that designing products and servies in close partnership with our clients is the only way to have real impart on their business.
                </Desc>
                <Info>
                    <Button>
                        START A PROJECT
                    </Button>
                    <Contact>
                        <Phone>Call Us 1(917)-111-1111</Phone>
                        <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={ Poster }></Image>
            </Right>
        </Container>
    )
}
