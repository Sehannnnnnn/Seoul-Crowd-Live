import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
function List() {
    const status = useSelector((state) => state.liveData.status)
    const placeInfoList = useSelector((state) => state.liveData.liveData); 
  return (
    <div>List
      <PlaceList>
      {placeInfoList.length > 0 && placeInfoList.map((place) => <PlaceElement key={place.id}>
        <div className='place_thumbnail'>
          {/* 이미지, 붐빔태그, 이름 */}
        </div>
        <div></div>
      </PlaceElement>)}
      </PlaceList>
        
    </div>
  )
}

const PlaceList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-column-gap: 8px;
  grid-row-gap: 12px;

`

const PlaceElement = styled.li`
  border: 1px solid black;
  height: 32px;
`
export default List