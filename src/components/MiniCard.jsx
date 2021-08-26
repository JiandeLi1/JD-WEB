import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    padding:10px;
    margin:10px;
    -webkit-box-shadow: 6px 3px 16px -6px #000000; 
    box-shadow: 6px 3px 16px -6px #000000;
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
