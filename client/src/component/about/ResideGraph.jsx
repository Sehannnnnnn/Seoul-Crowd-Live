import React from 'react'
import styled, { keyframes } from 'styled-components'
import { AbtContainer, AbtH3, Comment, Msg } from './commonStyled'

function ResideGraph({reside, nonreside, theme}) {
  const large = reside > nonreside ? "주거인원" : "방문객";
  const small = reside > nonreside ? "방문객" : "주거인원";
  const diff = Math.round(Math.abs(reside - nonreside) * 100) / 100;
  return (
    <AbtContainer theme={theme}>
      <AbtH3>실시간 주거인원 비</AbtH3>
      <Comment>
        <em>{large}</em>이 <em>{small}</em> 보다 <em className="num">{diff}%</em> 더 많아요.
      </Comment>
      <DonutGraph ratio={reside}>
        <div className='inner_space'>
        </div>
      </DonutGraph>
      <TextArea>
        <Msg>
          <span className="reside"></span>주거인원 비율: <strong>{reside}%</strong>
        </Msg>
        <Msg>
          <span className="non_reside"></span>방문객 비율: <strong>{nonreside}%</strong>
        </Msg>
      </TextArea>
      
    </AbtContainer>
  )
}

const donutAnimation = (p) => keyframes`
  0% {
    background: conic-gradient(#b556db 0% 100%);
  }
  100% {
    background: conic-gradient(#b556db 0% ${p}%, #f5ec40 ${p}% 100%);
  }
`

const DonutGraph = styled.div`
  float: left;
  position: relative;
  margin: 40px 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #eee;
  background: conic-gradient(#b556db 0% ${(props) => props.ratio}%, #f5ec40 ${(props) => props.ratio}% 100%);
  box-shadow: 10px 0 10px -10px #333;
  animation: ${donutAnimation((props) => props.ratio)} 1s linear;
  .inner_space {
    width: 100px;
    height: 100px;
    box-shadow: inset 10px 0 10px -10px #333;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const TextArea = styled.div`
  margin-top: 100px;
  .reside {
    display: inline-block;
    vertical-align: top;
    width: 40px;
    height: 20px;
    margin-right: 15px;
    background-color: #b556db; 
  }

  .non_reside {
    display: inline-block;
    vertical-align: top;
    width: 40px;
    height: 20px;
    margin-right: 15px;
    background-color: #f5ec40; 
  }
`

export default ResideGraph