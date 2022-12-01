import { SEOUL_PLACE_LIST } from "../repository/SeoulPlaceList.js";
import { fetchLiveData } from "../service/fetchLiveData.js";

// const placeName = SEOUL_PLACE_LIST[49].name; 

const liveInfo = async (req, res) => {
    const id = parseInt(req.query.id);
    const placeName = SEOUL_PLACE_LIST.filter((place) => place.id === id)[0].name
    await fetchLiveData(placeName).then(data => res.send(data));
}



export { liveInfo }