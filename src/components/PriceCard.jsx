import React, { useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding:20px;
    border-radius: 10px;
    background-color: white;
    -webkit-box-shadow: 5px 5px 10px 1px rgba(0,0,0,0.24); 
    box-shadow: 5px 5px 10px 1px rgba(0,0,0,0.24);
    @media only screen and (max-width:480px){
        height: 26vh;
    }
`
const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:50px 0;
    @media only screen and (max-width:480px){
        padding:5px 0;
    }
`
const Price = styled.span`
    font-size: 20px;
    @media only screen and (max-width:480px){
        font-size:12px;
    }
`
const PriceShow = styled.span`
    font-size: 50px;
    font-weight: bold;
    @media only screen and (max-width:480px){
        font-size:24px;
    }
`
const Type = styled.button`
    padding:10px 20px;
    color:orange;
    font-size: 15px;
    font-weight: bold;
    background-color: transparent;
    border: solid 1px orange;
    border-radius: 10px;
    outline:none;
    @media only screen and (max-width:480px){
        padding:5px 15px;
    }

`
const List = styled.ul`
    list-style: none;
`
const ListItem = styled.li`
 margin: 10px 0;
 @media only screen and (max-width:480px){
        margin: 5px 0;
    }
`
const Button = styled.button`
    padding:5px 15px;
    color:white;
    font-size: 15px;
    font-weight: bold;
    background-color: orange;
    border: none;
    border-radius: 5px;
    outline:none;
`


export default function PriceCard({ price, type, Item }) {
    const smallSreen = window.screen.width <= 480 ? true : false
    console.log(smallSreen,window.screen.width)
    return (
        <Container>
            <PriceContainer>
                <Price>$ <PriceShow>{ price }</PriceShow> /month</Price>
                {!smallSreen && <br />}
                {!smallSreen && <Type>{type}</Type>}
                {!smallSreen && <br />}
                <List>
                    {
                            Item?.map(item => (
                            <ListItem>{ item }</ListItem>
                            ))
                            
                    }
                </List>
                {!smallSreen && <br />}
                <Button> Join Now</Button>
            </PriceContainer>
        </Container>
    )
}
