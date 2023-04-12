import { readAllInfo, readInfoByPlaceID } from "../utils/readInfoDB.js";

// const placeName = SEOUL_PLACE_LIST[49].name; 

const liveInfo = async (req, res) => {
    if (req.query.id == undefined) {
        //리스트 모두를 전송
        await readAllInfo().then(data => 
            res.status(200).send(data)
            )
    }
    else {
        const id = parseInt(req.query.id);
        await readInfoByPlaceID(id).then(data => {
            if (data.length == 1) {
                res.status(200).send(data[0])
            }
            else {
                res.status(404).send("Data Not Found")
            }
        })
    }
    
}

export { liveInfo }