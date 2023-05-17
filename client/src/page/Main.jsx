import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { ContainerCol } from '../component/styled/customset'
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
    <ContainerCol>
        <MainH1>서울시 인구 정보 조회 서비스</MainH1>
        <ImgMain src={seoulmap} alt="seoulmap.png"></ImgMain>
        <MainP>어디로 가고 싶으세요?</MainP>
        <MainP>서울 50곳에 실시간 인구정보를 바로 확인하세요!</MainP>
        <LinkToList href="/list">
          <FaArrowCircleRight size="15"/> 50곳 리스트로 보기
        </LinkToList>
        <RandomAreaBox className="RndBox">
          {status === "succeed" && placeList.map((place) => {
            let [x,y] = randomXYCord()
            return <PlaceName key={place.id} x={x} y={y}>{place.name}</PlaceName>
          })}
        </RandomAreaBox>
    </ContainerCol>
  )
}

const MainH1 = styled.h1`
  font-size: 32px;
  line-height: 38px;
  margin-top: 20px;
  color: #125a5a;
`

const MainP = styled.p`
  font-size: 20px;
  margin-top: 12px;
`

const ImgMain = styled.img`
  margin: 3px 0;
  vertical-align: top;
`

const SearchBtn = styled.button`
  border: 2px solid #A4A71F;
  background-color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 30%;
  &:hover {
    box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  }
  &:disabled {
    background-color: lightgrey;
  }
`

const LinkToList = styled.a`
  display: block;
  padding: 15px;
  background-color: #1A8B8B;
  color: white;
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: 0 4px 6px rgb(32 33 36 / 18%);
  &:hover {
    box-shadow: 0 4px 6px rgb(32 33 36 / 35%);
  }
`

const RandomAreaBox = styled.div`
  font-size: 0px;
  width: 100%;
  margin-top: 20px;
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