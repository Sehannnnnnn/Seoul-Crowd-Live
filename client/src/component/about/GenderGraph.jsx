import React from 'react'
import styled from 'styled-components'
import { AbtContainer, 
AbtH3 } from './commonStyled'

function GenderGraph({male, female, theme}) {
  return (
    <AbtContainer theme={theme}>
        <AbtH3>실시간 성별</AbtH3>
        <GraphArea>
            <MaleStack src={require('../../static/male.png')} rate={male}>
            </MaleStack>
            <FemaleStack src={require('../../static/female.png')} rate={female}></FemaleStack>
        </GraphArea>
        <TextArea>
            <li className="item">
                남성 : <span className="ratio">{male}</span>%
            </li>
            <li className="item">
                여성 : <span className="ratio">{female}</span>%
            </li>
        </TextArea>
    </AbtContainer>
  )
}




const GraphArea = styled.div`
    position: relative;
    margin-top: 20px;
    height: 200px;
    border: 1px solid #555;
    background-color: #ffffff;
    background-image: url("https://www.transparenttextures.com/patterns/lined-paper.png");
`

const MaleStack = styled.img`
    position: absolute;
    bottom: 2px;
    left: 25%;
    transform: translateX(-50%);
    vertical-align: bottom;
    height: ${(props) => props.rate*3}px;
    filter: drop-shadow(2px 2px 2px gray);
`
const FemaleStack = styled.img`
    position: absolute;
    bottom: 2px;
    left: 75%;
    transform: translateX(-50%);
    vertical-align: bottom;
    height: ${(props) => props.rate*3}px;
    filter: drop-shadow(2px 2px 2px gray);
`

const TextArea = styled.ul`
    font-size: 20px;
    .item {
        display: inline-block;
        width: 50%;
        text-align: center;
        margin-top: 10px;
    }
    .ratio {
        font-size: 30px;
    }
`

export default GenderGraph