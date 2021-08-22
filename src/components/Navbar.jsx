import React from 'react'
import styled from "styled-components"


const Container = styled.div`
    height:50px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
`;

const Logo = styled.h1`
   font-weight: bold;
   text-decoration: underline orange;
`;

const Menu = styled.ul`
    display:flex;
    justify-content: space-between;
    width: 70%;
    list-style: none;
`;

const MenuItem = styled.li`
 font-size: 20px;
 color:gray;
 font-weight: 700;
`;

const Button = styled.button`
  padding:10px 15px;
  font-weight: bold;
  background-color:orange;
  color:white;
  border: solid 2px white;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;


export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                        <Logo>
                            JD web
                    </Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
                <Button>Join Now</Button>
            </Wrapper>
        </Container>
    )
}
