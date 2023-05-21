import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import getPlaceImage from '../utils/getPlaceImage';
import GenderGraph from '../component/about/GenderGraph';
import Message from '../component/about/Message';
import AgeGraph from '../component/about/AgeGraph';
import ResideGraph from '../component/about/ResideGraph';
import Header from '../component/Header';

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
  const [ageData, setAgeData] = useState({});
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
      setAgeData({
        0 : placeInfo.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_0,
        10: placeInfo.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_10,
        20: placeInfo.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_20, 
        30 : placeInfo.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_30,
        40: placeInfo.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_40,
        50: placeInfo.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_50,
        60 : placeInfo.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_60,
        70: placeInfo.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_70})
    }
  }, [placeInfo])

  return (
    placeInfo && cityData && imgUrl &&
    <Container>
    <Header title={'지역별 세부 정보'}>
    </Header>
    <Body>
    <ImgBox src={imgUrl}></ImgBox>
    <Message name={placeInfo.name} tag={cityData.AREA_CONGEST_LVL} msg={cityData.AREA_CONGEST_MSG} max={cityData.AREA_PPLTN_MAX} min={cityData.AREA_PPLTN_MIN} theme={theme} time={cityData.PPLTN_TIME}></Message>
    <GenderGraph male={cityData.MALE_PPLTN_RATE} female={cityData.FEMALE_PPLTN_RATE} theme={theme}></GenderGraph>
    <AgeGraph agedata={ageData} theme={theme}>
    </AgeGraph>
    <ResideGraph reside={cityData.RESNT_PPLTN_RATE} nonreside={cityData.NON_RESNT_PPLTN_RATE} theme={theme}>
    </ResideGraph>
    </Body>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 40px;
`

const Body = styled.div`
    padding: 0 20px;
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