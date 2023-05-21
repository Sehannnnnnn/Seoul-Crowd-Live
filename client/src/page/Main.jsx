import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Divider, MainWrap } from '../component/styled/customset'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import seoulmap from '../static/seoulmap.png'
import { FaArrowCircleRight } from 'react-icons/fa'

function Main() {
    const {status, placeList} = useSelector((state) => state.place);

    const randomTime = () => {
      let t = Math.floor(Math.random()*100)/100;
      return t
    }
    

  return (
    <MainWrap>
        <MainH1>SEOUL CROWD LIVE</MainH1>
        <MainH2>서울시 인구 정보 조회 서비스</MainH2>
        <ImgMain src={seoulmap} alt="seoulmap.png"></ImgMain>
        <MainP>어디로 가고 싶으세요?</MainP>
        <MainP>서울 50곳에 실시간 인구정보를 바로 확인하세요!</MainP>
        <LinkToList href="/list">
          <FaArrowCircleRight size="15"/> 50곳 리스트로 보기
        </LinkToList>
        <Divider></Divider>
        <RandomAreaBox className="RndBox">
          {status === "succeed" && placeList.map((place) => {
            let t = randomTime()
            return <PlaceName key={place.id} time={t}>
              <Link to={`/about/${place.id}`}>{place.name}</Link>
              </PlaceName>
          })}
        </RandomAreaBox>
    </MainWrap>
  )
}

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const MainH1 = styled.h1`
  font-size: 42px;
  margin-bottom: 10px;
  color: #125a5a;
  animation: ${FadeIn} 1s linear;
`

const MainH2 = styled.h2`
  font-size: 30px;
  line-height: 38px;
  color: #1A8B8B;
  animation: ${FadeIn} 1s linear;
`

const MainP = styled.p`
  font-size: 20px;
  margin-top: 12px;
  animation: ${FadeIn} 1s linear;
`

const ImgMain = styled.img`
  margin: 3px 0;
  vertical-align: top;
  animation: ${FadeIn} 1s linear;
`

const LinkToList = styled.a`
  display: block;
  padding: 15px;
  background-color: #1A8B8B;
  color: white;
  border-radius: 10px;
  margin: 15px 0 60px 0;
  box-shadow: 0 4px 6px rgb(32 33 36 / 18%);
  animation: ${FadeIn} 1s linear;
  &:hover {
    box-shadow: 0 4px 6px rgb(32 33 36 / 35%);
  }
`

const RandomAreaBox = styled.div`
  font-size: 0px;
  margin: 60px 100px;
  white-space: pre-wrap;
  text-align: center;
  animation: ${FadeIn} 2s linear;
`
const textJump = keyframes`
   0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
`

const PlaceName = styled.a`
  display: inline-block;
  vertical-align: top;
  margin-left: 30px;
  font-size: 20px;
  padding: 10px 0;
  line-height: 24px;
  cursor: pointer;
  :hover {
    animation: ${textJump} 1s infinite;
  }
`
export default Main