import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import PlaceElement from '../component/PlaceElement';
import Header from '../component/Header';
import { sortPlaceList } from '../reducer/liveDataReducer';
import { Divider } from '../component/styled/customset';
function List() {
    const dispatch = useDispatch();
    const cntByPage = 10;
    const status = useSelector((state) => state.liveData.status)
    const placeList = useSelector((state) => state.liveData.liveData);
    const [pageCnt,setPageCnt] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPlaceList, setCurrentPlaceList] = useState([])

    const onSortHandler = (e, standard) => {
      dispatch(sortPlaceList(standard));
      let btns = document.querySelectorAll('.sort_btn');
      for (let btn of btns) {
        btn.className = 'sort_btn'
      }
      e.target.className = 'sort_btn active';
    }

    useEffect(() => {
      setPageCnt(parseInt(placeList.length/cntByPage))
    }, [placeList])


    useEffect(() => {
      setCurrentPlaceList(
        placeList.filter((place,idx) => 
          idx < currentPage*cntByPage && idx >= (currentPage-1)*cntByPage
        )
      )
            console.log(placeList[0])
    }, [placeList, currentPage])

  return (
    <>
    <Header title={'지역 리스트'}>
    </Header>
    <ListContainer>
      {placeList.length > 0 ? 
      <ListTitle>업데이트 시간 : {placeList[0].citydata.LIVE_PPLTN_STTS.PPLTN_TIME}</ListTitle> : <ListTitle>실시간 데이터를 가져오는 중입니다..</ListTitle>
      }
      <Divider></Divider>
      <SortBtnGroup>
        <div className='sort_h'>정렬기준</div>
        <li className='btn_grp'>
          <span className='sort_std'>혼잡도</span>
          <button className='sort_btn active' onClick={(e) => onSortHandler(e,'여유')}>여유 순</button>
          <button className='sort_btn' onClick={(e) => onSortHandler(e,'혼잡')}>혼잡 순</button>
        </li>
        <li className='btn_grp'>
          <span className='sort_std'>성비</span>
          <button className='sort_btn' onClick={(e) => onSortHandler(e,'남성비')}>남성비율 순</button>
          <button className='sort_btn' onClick={(e) => onSortHandler(e,'여성비')}>여성비율 순</button>
        </li>
        <li className='btn_grp'>
          <span className='sort_std'>연령층</span>
          <button className='sort_btn' onClick={(e) => onSortHandler(e,'10대')}>10대 순</button>
          <button className='sort_btn' onClick={(e) => onSortHandler(e,'20대')}>20대 순</button>
          <button className='sort_btn' onClick={(e) => onSortHandler(e,'30대')}>30대 순</button>
          <button className='sort_btn' onClick={(e) => onSortHandler(e,'40대')}>40대 순</button>
        </li>
      </SortBtnGroup>
      <Divider></Divider>
      <PlaceList>
      {currentPlaceList.length > 0 && currentPlaceList.map((place) => <PlaceElement key={place.id} place={place} isLoading={status}>
      </PlaceElement>)}
      </PlaceList>
      <PageBtnArea>
        {[...Array(pageCnt)].map((e,i) => <PageBtn key={i} isOn={i+1 === currentPage} onClick={() => setCurrentPage(i+1)}>{i+1}</PageBtn>)}
      </PageBtnArea>
    </ListContainer>
    </>
  )
}

const ListContainer = styled.div`
  overflow: hidden;
  padding-left: 30px;
  padding-top: 14px;
`

const ListTitle = styled.h2`
  margin: 20px 0px;
  font-size: 20px;
`

const SortBtnGroup = styled.div`
  .sort_h {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .sort_std {
    margin: 10px 0;
    font-size: 16px;
  }
  .sort_btn {
    margin: 8px 0;
    padding: 0 40px;
    font-size: 16px;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }
  .active {
    font-weight: bold;
    color: #125a5a;
  }
  .sort_btn + .sort_btn {
    border-left: 1px solid #aaa;
  }
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