import React, { useState } from 'react'
import styled from 'styled-components'
import Poster3 from '../img/Poster3.png'
import MiniCard from './MiniCard'
import search from '../img/search.png'
import Play from '../img/play.png'

const Container = styled.div`
    display:flex;
    height: 100vh;
    width: 100vw;
`

const Left = styled.div`
    position:relative;
    width: 50%;
    @media only screen and (max-width:480px){
        display: none;
    }
`

const Image = styled.img`
    display: ${props => props.open && "none"};
    margin-top: 20vh;
    margin-left: 5vw;
    height: 60vh;
    width: 45vw;
    @media only screen and (max-width:480px){
        display: none;
    }
`
const Video = styled.video`
    display: ${prop => !prop.open && "none"};
    height: 300px;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    margin: auto;
    @media only screen and (max-width:480px){
        width: 100vw;
    }

`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    @media only screen and (max-width:480px){
        width: 100%;
    }
`

const Wrapper = styled.div`
    padding:10vh;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:480px){
        width: 100vw;
    }
    
`

const Title = styled.h1`
    @media only screen and (max-width:480px){
        padding:10px;
        font-size: 25px;
    }
`
const Desc = styled.p`
    font-size: 20px;
    @media only screen and (max-width:480px){
        font-size:15px;
        padding:10px;
    }
`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5vh;
    @media only screen and (max-width:480px){
        width: 100vw;
        justify-content: space-around;
    }
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 35px;
    margin: 2vh;
    color:white;
    font-size: 20px;
    font-weight: bold;
    background-color: orange;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    @media only screen and (max-width:480px){
        background-color:#2d61f1;
    }
`
const Icon = styled.img`
    height: 60%;
    
`

const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    background-color: rgba(0,0,0,0.5);
`

const Close = styled.button`
    position:absolute;
    background-color: white;
    padding:5px;
    border:none;
    border-radius:5px;
    right:0px;
    top:33%;
`

const info ="Lorem ipsum dolor sit amet consectetur."


export default function Service() {
    const [open, setOpen] = useState(false)
    const smallSreen = window.screen.width <= 480 ? true : false
    return (
        <Container>
            <Left>
                <Image src={Poster3} open={open} />
                <Video
                    controls
                    autoPlay
                    loop
                    open={ open}
                    src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>
                        Simple Processto Start
                    </Title>
                    <Desc>
                        We provide digital experience services to startups and small
                        businesses to looking for a partner of their digital media, design &
                        development, lead generation and communications requirents. We work
                        with you, not for you. Although we have a great resources
                    </Desc>
                    <CardContainer>
                        <MiniCard info={info} img={ search} />
                        <MiniCard info={info} img={ search}/>
                        <MiniCard info={ info } img={ search}/>
                    </CardContainer>
                    <Button onClick={() => setOpen(!open) }>
                        <Icon src={ Play }/>
                        <p> &nbsp; Play</p>
                    </Button>
                </Wrapper>
            </Right>
            {
                (smallSreen && open) && (
                <Modal>
                    <Video
                    controls
                    autoPlay
                    loop
                    open={ open}
                    src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                    />
                        <Close onClick={ ()=>setOpen(false)}>Close</Close>
                </Modal> 
                )   
            }

        </Container>
    )
}
