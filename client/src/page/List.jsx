import React from 'react'
import { useSelector } from 'react-redux'
function List() {
    const placeList = useSelector((state) => state.place.placeList);
  return (
    <div>List
        {placeList.length > 0 && placeList.map((place) => <div key={place.id}>{place.name}</div>)}
    </div>
  )
}

export default List