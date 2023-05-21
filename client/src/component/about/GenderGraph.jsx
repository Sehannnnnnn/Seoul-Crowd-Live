import React from 'react'
import styled, { keyframes } from 'styled-components'
import { AbtContainer, 
AbtH3, Comment, GraphArea } from './commonStyled'

function GenderGraph({male, female, theme}) {
    const large = male > female ? '남성' : '여성';
    const small = male > female ? '여성' : '남성';
    const diff = Math.round(Math.abs((male-female) * 100)) / 100;
  return (
    <AbtContainer theme={theme}>
        <AbtH3>실시간 성비</AbtH3>
        {diff === 0 ? 
            <Comment>남성 50% 여성 50% 로 동일한 비율을 갖고 있어요.</Comment> : 
            <Comment><em>{large}</em>이 <em>{small}</em> 보다 <em className="num">{diff}%</em> 더 많아요.
            </Comment>
        }
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
const graphAnimation = (h) => keyframes`
    0% {
        height: 0;
    }
    100% {
        height: ${h}px;
    }
`

const MaleStack = styled.img`
    position: absolute;
    bottom: 2px;
    left: 25%;
    transform: translateX(-50%);
    vertical-align: bottom;
    height: ${(props) => props.rate*3}px;
    filter: drop-shadow(2px 2px 2px gray);
    animation: ${(props) => graphAnimation(props.rate*3)} 1000ms linear;
`

const FemaleStack = styled.img`
    position: absolute;
    bottom: 2px;
    left: 75%;
    transform: translateX(-50%);
    vertical-align: bottom;
    filter: drop-shadow(2px 2px 2px gray);
    height: ${(props) => props.rate*3}px;
    animation: ${(props) => graphAnimation(props.rate*3)} 1000ms linear;
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