import React from 'react'
import styled from 'styled-components'
import { Divider, MainWrap } from '../component/styled/customset'
import { useSelector } from 'react-redux'
import seoulmap from '../static/seoulmap.png'
import { FaArrowCircleRight } from 'react-icons/fa'

function Main() {
    const {status, placeList} = useSelector((state) => state.place);

    const randomXYCord = () => {
      let x = Math.floor(Math.random()*100);
      let y = Math.floor(Math.random()*10)*10;
      return [x+'%',y+'%']
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
            let [x,y] = randomXYCord()
            return <PlaceName key={place.id} x={x} y={y}>{place.name}</PlaceName>
          })}
        </RandomAreaBox>
    </MainWrap>
  )
}

const MainH1 = styled.h1`
  font-size: 42px;
  margin-bottom: 10px;
  color: #125a5a;
`

const MainH2 = styled.h2`
  font-size: 30px;
  line-height: 38px;
  color: #1A8B8B;
`

const MainP = styled.p`
  font-size: 20px;
  margin-top: 12px;
`

const ImgMain = styled.img`
  margin: 3px 0;
  vertical-align: top;
`

const LinkToList = styled.a`
  display: block;
  padding: 15px;
  background-color: #1A8B8B;
  color: white;
  border-radius: 10px;
  margin: 15px 0 60px 0;
  box-shadow: 0 4px 6px rgb(32 33 36 / 18%);
  &:hover {
    box-shadow: 0 4px 6px rgb(32 33 36 / 35%);
  }
`

const RandomAreaBox = styled.div`
  font-size: 0px;
  margin: 60px 100px;
  white-space: pre-wrap;
  text-align: center;
`

const PlaceName = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
  font-size: 20px;
  padding: 10px 0;
  line-height: 24px;
  ::after {
    content: '';
    display: inline-block;
    vertical-align: top;
    margin-left: 20px;
    width: 1px;
    height: 20px;
    background-color: #ccc;
  }
`
export default Main