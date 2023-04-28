import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function PlaceElement({place}) {
    const {id, name, citydata} = place
    const status = citydata.LIVE_PPLTN_STTS.AREA_CONGEST_LVL;
    const img_url = 'https://dummyimage.com/180x140/aaa/fff'
    const tagTheme = {
      "여유": '#1A8B8B',
      "보통": '#A4A71F',
      "붐빔": '#C6DF76',
      "매우 붐빔": '#DD4470'
    }
  return (
    <Link to={`/about/${id}`}>
      <EleContainer>
        <EleStatusTag theme={tagTheme[status]}>{status}</EleStatusTag>
        <EleImgBox url={img_url}></EleImgBox>
        <ElePlaceName>{name}</ElePlaceName>
      </EleContainer>
    </Link>
  )
}
const EleContainer = styled.div`
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);
  margin-right: 10px;
  margin-bottom: 10px;
`

const EleStatusTag = styled.span`
  float: left;
  padding: 5px 10px;
  background-color: ${(props) => props.theme};
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
`

const EleImgBox = styled.div`
  background-image: url(${(props) => props.url});
  width: 180px;
  height: 140px;
`

const ElePlaceName = styled.div`
  margin: 8px 0;
  width: 160px;
  padding: 0 10px;
  text-align: center;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    font-weight: bold;
  }
`


export default PlaceElement