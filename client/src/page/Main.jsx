import React from 'react'
import styled from 'styled-components'
import { ContainerCol } from '../component/styled/customset'
import { useSelector } from 'react-redux'
import seoulmap from '../static/seoulmap.png'
import { FaSearchLocation } from 'react-icons/fa'
import Autocomplete from '../component/Autocomplete'

function Main() {
    const {status} = useSelector((state) => state.place);

  return (
    <ContainerCol>
        <h1>어디로 가고 싶으세요?</h1>
        <p>서울 명소 50곳에 실시간 인구정보를 바로 확인하세요!</p>
        {status === "succeed" ? 
            <>
            <SearchContainer>
            <Autocomplete type={'text'}></Autocomplete>
            <SearchBtn>
            <FaSearchLocation size="30" color="#A4A71F"/>
            </SearchBtn>
            </SearchContainer>
            <img src={seoulmap} alt="seoulmap.png"></img>
            </>: <></>}
    </ContainerCol>
  )
}

const SearchBtn = styled.button`
  background-color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  &:hover {
    box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  }
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`
export default Main