import React from 'react'
import styled from 'styled-components'

function GenderGraph({male, female, theme}) {
  return (
    <Container theme={theme}>
        <H3>성별 정보</H3>
        <GraphArea>
            <MaleStack src={require('../../static/male.png')} rate={male}>
            </MaleStack>
            <FemaleStack src={require('../../static/female.png')} rate={female}></FemaleStack>
        </GraphArea>
        <TextArea>
            <li>
                남자 비율 : {male}%
            </li>
            <li>
                여자 비율 : {female}%
            </li>
        </TextArea>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 24px;
    border: 3px solid ${(props) => props.theme};
    border-radius: 20px;
    background-color: #fff;
    padding: 24px;
`

const H3 = styled.h3`
    font-size: 21px;
`
const GraphArea = styled.div`
    position: relative;
    margin-top: 20px;
    height: 200px;
    border-bottom: 1px solid black;
    background-color: #ffffff;
    background-image: url("https://www.transparenttextures.com/patterns/lined-paper.png");
`

const MaleStack = styled.img`
    position: absolute;
    bottom: 0;
    left: 60px;
    vertical-align: bottom;
    height: ${(props) => props.rate*3}px;
`
const FemaleStack = styled.img`
    position: absolute;
    bottom: 0;
    right: 60px;
    vertical-align: bottom;
    height: ${(props) => props.rate*3}px;
`

const TextArea = styled.ul`
    font-size: 20px;
    margin-top: 20px;
    li {
        margin-top: 10px;
    }
`

export default GenderGraph