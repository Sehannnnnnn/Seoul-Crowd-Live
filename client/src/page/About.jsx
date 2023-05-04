import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import getPlaceImage from '../utils/getPlaceImage';
import GenderGraph from '../component/about/GenderGraph';
import Message from '../component/about/Message';

const tagTheme = {
  "여유": '#1A8B8B',
  "보통": '#A4A71F',
  "약간 붐빔": '#cba86b',
  "붐빔": '#DD4470',
  "매우 붐빔": '#ef1031'
}

function About({place}) {
  const params = useParams();
  const placeID = parseInt(params.id);

  const liveData = useSelector((state) => state.liveData.liveData);
  const [placeInfo, setplaceInfo] = useState(null);
  const [cityData , setcityData] = useState(null);
  const [imgUrl, setimgUrl] = useState(undefined);
  const [theme, setTheme] = useState('#bbb');
  useEffect(() => {
    if (placeID > 0) {
      getPlaceImage(placeID, setimgUrl)
    }
  
  }, [placeID])



  useEffect(() => {
    if (liveData.length > 0 && placeID > 0) {
      setplaceInfo(() => liveData.filter((data) => parseInt(data.id) === placeID)[0])
    }
  }, [liveData, placeID])

  useEffect(() => {
    if (placeInfo) {
      setcityData(() => placeInfo.citydata.LIVE_PPLTN_STTS)
      setTheme(tagTheme[placeInfo.citydata.LIVE_PPLTN_STTS.AREA_CONGEST_LVL])
    }
  }, [placeInfo])

  return (
    placeInfo && cityData && imgUrl &&
    <Container>
    <Header>
      {placeInfo.name}
    </Header>
    <Body>
    <ImgBox bg={imgUrl}></ImgBox>
    <Message tag={cityData.AREA_CONGEST_LVL} msg={cityData.AREA_CONGEST_MSG} theme={theme}></Message>
    <GenderGraph male={cityData.MALE_PPLTN_RATE} female={cityData.FEMALE_PPLTN_RATE} theme={theme}>
      {cityData.AREA_CONGEST_LVL}
    </GenderGraph>
    <div>
      {cityData.AREA_PPLTN_MIN}
    </div>
    <div>
      {cityData.AREA_PPLTN_MAX}
    </div>
      {}
    <div>
    {}
    </div>
    <div>
    {cityData.PPLTN_RATE_0}
    </div>
    <div>
    {cityData.PPLTN_RATE_10}
    </div>
    <div>
    {cityData.PPLTN_RATE_20}
    </div>
  <div>
  {cityData.PPLTN_RATE_30}
  </div>
     <div>
     {cityData.PPLTN_RATE_40}
      </div> 
    </Body>
    
    <div>
    {parseInt(cityData.PPLTN_RATE_50) + parseInt(cityData.PPLTN_RATE_60) + parseInt(cityData.PPLTN_RATE_70)}
    </div>
    </Container>
  )
}

const Container = styled.div`
  width: 410px;
`

const Header = styled.div`
  margin-top: 18px;
  padding-bottom: 18px;
  font-size: 24px;
  font-weight: bold;
  text-indent: 20px;
  border-bottom: 3px solid #1A8B8B;
`

const Body = styled.div`
    padding: 0 20px;
`

const ImgBox = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: 100% 260px;
  background-repeat: no-repeat;
  margin-top: 20px;
  width: 100%;
  height: 260px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background: rgba(0,0,0,0.2);
    border: 3px solid #aaa;
  }
`


export default About