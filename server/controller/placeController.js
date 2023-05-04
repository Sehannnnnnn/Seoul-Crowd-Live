import { SEOUL_PLACE_LIST } from "../repository/SeoulPlaceList.js";
import { readImgThumbnail } from "../utils/readInfoDB.js";

const listupAll = (req, res) => {
    res.status(200).send(SEOUL_PLACE_LIST);
}

const imgByPlace = async (req, res) => {
    if (req.query.id == undefined) {
        await readImgThumbnail().then(data => 
            res.status(200).send(data)
        )
    }
    else {
        const id = parseInt(req.query.id);
        console.log(id)
        await readImgThumbnail(id).then(data => {
            if (data.length == 1) {
                res.status(200).send(data[0])
            }
            else {
                res.status(404).send("Data Not Found")
            }
        })
    }
    
}



export { listupAll, imgByPlace }