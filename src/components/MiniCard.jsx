import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    padding:10px;
    margin:10px;
    background-color: white;
    -webkit-box-shadow: 6px 3px 16px -6px #000000; 
    box-shadow: 6px 3px 16px -6px #000000;
    @media only screen and (max-width:480px){
       padding: 10px 5px 10px 5px;
       margin: 10px 5px 10px 5px;
    }
`

export default function MiniCard({ info, img }) {
    return (
        <Card>
            <img src={img} alt="" />
            <div>
                { info }
            </div>
        </Card>
    )
}
