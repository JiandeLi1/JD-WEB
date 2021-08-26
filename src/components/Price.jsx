import React from 'react'
import PriceCard from './PriceCard'
import styled from 'styled-components'

const Container = styled.div`
   display:flex;
   justify-content:space-around;
   align-items: center;
   width: 100vw;
   height: 100vh;
`
const item1 = [
    "200 hand-Crafted Templates",
    "Exclusive Support",
    "50+ PreBuiltWebsites",
    "Premium Plugins"
]
export default function Price() {
    return (
        <Container>
            <PriceCard
                price={100}
                type="Basic plane"
                Item={item1}
            />
            <PriceCard
                price={100}
                type="Basic plane"
                Item={item1}
            />
            <PriceCard
                price={100}
                type="Basic plane"
                Item={item1}
            />
        </Container>
    )
}
