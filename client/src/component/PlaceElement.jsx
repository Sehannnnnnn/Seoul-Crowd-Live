import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import getPlaceImage from '../utils/getPlaceImage';

function PlaceElement({place}) {
    const {id, name, citydata} = place;
    const status = citydata.LIVE_PPLTN_STTS.AREA_CONGEST_LVL;
    const tagTheme = {
      "여유": '#1A8B8B',
      "보통": '#A4A71F',
      "약간 붐빔": '#cba86b',
      "붐빔": '#DD4470',
      "매우 붐빔": '#ef1031'
    }
    const [imgUrl, setimgUrl] = useState(undefined);
    const generateTime = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    useEffect(() => {
      setTimeout(() => getPlaceImage(id, setimgUrl),
      generateTime(0, 2000))
    }, [id])

  return (
    <Link to={`/about/${id}`}>
      <EleContainer>
        <EleImgBox url={imgUrl}>
        {imgUrl === undefined && 
          <SkelelonElement>
            <LoadingBlock sn={1}></LoadingBlock>
            <LoadingBlock sn={2}></LoadingBlock>
            <LoadingBlock sn={3}></LoadingBlock>
          </SkelelonElement>
        }
        </EleImgBox>
        <EleStatusTag theme={tagTheme[status]}>{status}</EleStatusTag>
        <ElePlaceName>{name}</ElePlaceName>
      </EleContainer>
    </Link>
  )
}
const EleContainer = styled.div`
  overflow: hidden;
  position: relative;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);
  margin-right: 24px;
  margin-bottom: 24px;
`

const EleStatusTag = styled.span`
  float: left;
  padding: 5px 10px;
  background-color: ${(props) => props.theme};
  color: #fff;
  font-size: 18px;
  line-height: 32px;
  font-weight: bold;
`

const EleImgBox = styled.div`
  position: relative;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: 320px 240px;
  width: 320px;
  height: 240px;
`

const ElePlaceName = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 42px;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    font-weight: bold;
  }
`

const SkelelonElement = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0%;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(164,167,31);
    background: linear-gradient(90deg, rgba(164,167,31,0.5634628851540616) 0%, rgba(26,139,139,1) 100%);
`

const blockAnimation = keyframes`
    0% {
        height: 5%
    }
    100% {
        height: 15%
    }
`

const LoadingBlock = styled.div`
    background-color: white;
    margin-left: 4px;
    width: 8px;
    animation : ${blockAnimation} 400ms infinite alternate;
    ${(props) => `
        animation-delay: ${props.sn}00ms;
    `};
`



export default PlaceElement