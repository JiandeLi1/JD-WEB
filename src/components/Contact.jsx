import React from 'react'
import styled from 'styled-components'
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'

const Container = styled.div`
    height: 90%;
    background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`
const Wrapper = styled.div`
    height: 100%;
    padding:20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }

`
const FormContainer = styled.div`
    width: 50%;
`
const Form = styled.div`
    display:flex;
    justify-content: space-around;
    @media only screen and (max-width:480px){
        flex-direction: column;
        align-items: center;
    }
`
const Title = styled.h1`
    height: 100px;
`
const FormLeft = styled.div`
    display:flex;
    flex-direction: column;
    width: 250px;
`
const FormInput = styled.input`
    margin-top: 20px;
    padding:5px 10px;
    @media only screen and (max-width:480px){
        margin-top: 10px;
    }
`
const FormRight = styled.div`
    display:flex;
    flex-direction: column;
    width: 250px;
`

const FormText = styled.textarea`
   margin: 120px 0 20px 0;
   height: 75px;
   @media only screen and (max-width:480px){
        margin: 20px 0 20px 0;
    }

`
const FormButton = styled.button`
    width: 150px;
    padding:5px 10px;
    font-size: 15px;
    font-weight: bold;
    background-color: orange;
    color:white;
    border: none;
    border-radius: 5px;
    @media only screen and (max-width:480px){
        margin: auto;
    }
`
const AddressContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    height: 230px;
    padding-left: 100px;
    @media only screen and (max-width:480px){
        padding-left: 0;
        align-items: center;
        width:100%;
        height:20%
    }
`
const Item = styled.div`
    font-size: 20px;
`
const Icon = styled.img`
    width: 25px;
`

export default function Contact() {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Form>
                        <FormLeft>
                            <Title>
                                Questions?
                                Let's Get In Touch
                            </Title>
                            <FormInput />
                            <FormInput />
                           <FormInput />
                        </FormLeft>
                        <FormRight>
                            <FormText />
                            <FormButton>
                                Send
                            </FormButton>
                        </FormRight>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <Item><Icon src={Map} /> &nbsp; 123 Avenue Q, NY, NY, USA</Item>
                    <Item><Icon src={ Phone } />  &nbsp; +1(123)456-7890</Item>
                    <Item><Icon src={ Send }/> &nbsp; ABC@123.com</Item>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}
