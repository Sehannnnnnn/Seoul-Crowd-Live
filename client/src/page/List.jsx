import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import PlaceElement from '../component/PlaceElement';
import { ContainerCol } from '../component/styled/customset';
function List() {
    const cntByPage = 18;
    const status = useSelector((state) => state.liveData.status)
    const placeList = useSelector((state) => state.liveData.liveData);
    const [pageCnt,setPageCnt] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPlaceList, setCurrentPlaceList] = useState([])


    useEffect(() => {
      setPageCnt(parseInt(placeList.length/cntByPage)+1)
    }, [placeList])


    useEffect(() => {
      setCurrentPlaceList(
        placeList.filter((place,idx) => 
          idx < currentPage*cntByPage && idx >= (currentPage-1)*cntByPage
        )
      )
    }, [placeList, currentPage])

  return (
    <ContainerCol>
    <ListTitle>서울시 지역 50곳</ListTitle>
    <ListContainer>
      <PlaceList>
      {currentPlaceList.length > 0 && currentPlaceList.map((place) => <PlaceElement key={place.id} place={place} isLoading={status}>
      </PlaceElement>)}
      </PlaceList>
      <PageBtnArea>
        {[...Array(pageCnt)].map((e,i) => <PageBtn key={i} isOn={i+1 === currentPage} onClick={() => setCurrentPage(i+1)}>{i+1}</PageBtn>)}
      </PageBtnArea>
    </ListContainer>
    </ContainerCol>
  )
}

const ListContainer = styled.div`
  padding-left: 30px;
  padding-top: 14px;
  background-color: #eee;
`

const ListTitle = styled.h2`
  margin: 20px 30px;
  font-size: 26px;
`

const PlaceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 18px;
  width: 100%;
  min-width: 320px;
`

const PageBtnArea = styled.div`
  text-align:center;
  margin-right:10px;;
`

const PageBtn = styled.button`
  line-height: 30px;
  width: 30px;
  background-color: #fff;
  border: 1px solid #eee;
  margin-bottom: 10px;
  box-sizing: border-box;
  ${(props) => props.isOn ? 'border-bottom: 2px solid #1A8B8B' : ''}
`


export default List