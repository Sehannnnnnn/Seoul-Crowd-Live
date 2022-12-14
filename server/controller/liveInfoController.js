import { SEOUL_PLACE_LIST } from "../repository/SeoulPlaceList.js";
import { readInfoDB } from "../utils/readInfoDB.js";

// const placeName = SEOUL_PLACE_LIST[49].name; 

const liveInfo = async (req, res) => {
    const id = parseInt(req.query.id);
    console.log(id)
    const placeName = SEOUL_PLACE_LIST.filter((place) => place.id === id)[0].name
    await readInfoDB(id,placeName).then(data => {
        if (data.length == 1) {
            res.status(200).send(data[0])
        }
        else {
            res.status(404).send("Data Not Found")
        }
    })
}



export { liveInfo }