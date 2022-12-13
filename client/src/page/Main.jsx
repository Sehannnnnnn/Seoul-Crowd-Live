import React from 'react'
import styled from 'styled-components'
import { ContainerCol } from '../component/styled/customset'
import seoulmap from '../static/seoulmap.png'

function Main() {
  return (
    <ContainerCol>
        <h1>어디로 가고 싶으세요?</h1>
        <p>서울 명소 50곳에 실시간 인구정보를 바로 확인하세요!</p>
        <SearchBox type={'text'}></SearchBox>
        <img src={seoulmap} alt="seoulmap.png"></img>
    </ContainerCol>
  )
}

const SearchBox = styled.input`
    width: 12rem;
    height: 2rem;
    border: 2px solid #A4A71F;
    border-radius: 1rem;
    margin-bottom: 40px;
    font-size: 16px;
`
export default Main