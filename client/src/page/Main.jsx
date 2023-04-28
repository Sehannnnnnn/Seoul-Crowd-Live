import React, {useState} from 'react'
import styled from 'styled-components'
import { ContainerCol } from '../component/styled/customset'
import { useSelector, useDispatch } from 'react-redux'
import seoulmap from '../static/seoulmap.png'
import { FaArrowCircleRight } from 'react-icons/fa'

function Main() {
    const dispatch = useDispatch();
    const {status, placeList} = useSelector((state) => state.place);
    const [text, setText] = useState("");


  return (
    <ContainerCol>
        <ImgMain src={seoulmap} alt="seoulmap.png"></ImgMain>
        <h1>어디로 가고 싶으세요?</h1>
        <p>서울 50곳에 실시간 인구정보를 바로 확인하세요!</p>
        {status === "succeed" ? 
            <>
            
            </>: <></>}
        <LinkToList href="/list">
          <FaArrowCircleRight size="15"/> 50곳 리스트로 보기 </LinkToList>
    </ContainerCol>
  )
}

const ImgMain = styled.img`
  margin: 3px 0;
  width: 130px;
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
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
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
export default Main