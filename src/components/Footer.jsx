import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 10%;
    background-color: orange;
`

const Wrapper = styled.div`
    height: 100%;
    margin-left: 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`

const List = styled.ul`
    display:flex;
    padding:0;
    margin:0;
    list-style: none;
`

const ListItem = styled.li`
    margin-right:20px;
    color:white;
    font-size: 15px;
    font-weight: bold;
`

const Copyright = styled.span`
    margin-right:20px;
    color:white;
    font-size: 15px;
    font-weight: bold;
`
    
    


export default function Footer() {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>Guide</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>API</ListItem>
                    <ListItem>Community</ListItem>
                </List>
                <Copyright>JD Web &copy;</Copyright>
            </Wrapper>
        </Container>
    )
}
