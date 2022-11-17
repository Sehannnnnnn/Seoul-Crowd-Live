import { SEOUL_PLACE_LIST } from "../repository/SeoulPlaceList.js";
import { fetchLiveData } from "../service/fetchLiveData.js";

const placeName = SEOUL_PLACE_LIST[49].name; 

const liveInfo = async (req, res) => {
    await fetchLiveData(placeName).then(data => res.send(data));
}



export { liveInfo }