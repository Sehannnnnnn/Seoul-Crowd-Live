import React from 'react'
import styled, { keyframes } from 'styled-components'
import { AbtContainer, AbtH3, GraphArea, Comment } from './commonStyled'

function AgeGraph({agedata,theme}) {

  const histogramColor = {
    0: '#dbe851',
    10: '#c7e851',
    20: '#9fe851',
    30: '#51e85e',
    40:'#51e8a9',
    50:'#51e8e8',
    60: '#519fe8',
    70: '#6051e8'
  }

  const sort = Object.entries(agedata).sort((a,b) => b[1] - a[1]);
  const max = sort[0];

  return (
    <AbtContainer theme={theme}>
      <AbtH3>실시간 연령비</AbtH3>
      <Comment>
        <em>{max[0]}대</em>가 <em className="num">{max[1]}%</em>를 차지하며 가장 많아요.
      </Comment>
      <Comment>
        {sort.map(([key,value]) => 
          <span className='order' key={key}>{key}대</span>
        )} 순서로 많아요.
      </Comment>
      <GraphArea style={{marginBottom: '30px'}}>
        {Object.entries(agedata).map(([key,value]) => 
          <GraphStack key={key} rate={value} position={parseInt(key)} color={histogramColor[key]}>
            <div className='value'>{value}%</div>
            <div className='description'>{key}대</div>
          </GraphStack>
        )}
      </GraphArea>
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

const GraphStack = styled.div`
    position: absolute;
    bottom: 0;
    left: ${(props) => props.position/10*11+8}%;
    width: 30px;
    background-color: ${(props) => props.color};
    box-shadow: 5px 0 5px -5px #333;
    height: ${(props) => props.rate*3}px;
    animation: ${(props) => graphAnimation(props.rate*3)} 1s linear;
    .value {
      position: absolute;
      top: -20px;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 14px;
    }
    .description {
      position: absolute;
      bottom: -30px;
      left: -5px;
      right: -5px;
      text-align: center;
      font-size: 18px;
    }
`

export default AgeGraph