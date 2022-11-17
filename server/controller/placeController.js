import { SEOUL_PLACE_LIST } from "../repository/SeoulPlaceList.js";

const listupAll = (req, res) => {
    res.status(200).send(SEOUL_PLACE_LIST);
}



export { listupAll }