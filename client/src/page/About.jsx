import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import getPlaceImage from '../utils/getPlaceImage';
import GenderGraph from '../component/about/GenderGraph';
import Message from '../component/about/Message';
import backBtn from '../static/backbtn.png'

const tagTheme = {
  "여유": '#1A8B8B',
  "보통": '#A4A71F',
  "약간 붐빔": '#cba86b',
  "붐빔": '#DD4470',
  "매우 붐빔": '#ef1031'
}

function About({place}) {
  const navigate = useNavigate();
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
    <Header theme={theme}>
      {placeInfo.name}
      <BackBtn onClick={() => navigate(-1)}></BackBtn>
    </Header>
    <Body>
    <ImgBox src={imgUrl}></ImgBox>
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
`

const Header = styled.div`
  position: relative;
  padding: 18px 0px;
  font-size: 24px;
  font-weight: bold;
  text-indent: 20px;
  background-color: ${(props) => props.theme};
  color: #eee;
  box-shadow: 2px 1px 1px #aaa;
`

const Body = styled.div`
    padding: 0 20px;
`
const BackBtn = styled.a`
    display: block;
    position: absolute;
    right: 10px;
    top: 16px;
    bottom: 16px;
    width: 40px;
    background-image: url(${backBtn});
    background-size: 31px 31px;
    background-repeat: no-repeat;
`
const ImgBox = styled.img`
  margin: 0 auto;
  width: 100%;
  max-width: 520px;
  margin-top: 24px;
  position: relative;
  border: 1px solid #aaa;
`



export default About