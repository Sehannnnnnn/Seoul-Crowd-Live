import { readFileSync } from "fs"
import path from "path";
//fetch 하지 않고 JSON에서 읽어오기
export const readInfoByPlaceID = async (id) => {
    const response = readFileSync(path.resolve('../DB', 'liveData.json'))
    const data = Object.values(JSON.parse(response)).filter((data) => data.id === id);
    if (data.length !== 1) {
        return []
    } else {
        return data;
    }
}

export const readAllInfo = async () => {
    const response = readFileSync(path.resolve('../DB', 'liveData.json'))
    let data = Object.values(JSON.parse(response))
    const SORT_KEY = [
        '여유', '보통', '약간 붐빔', '붐빔', '매우 붐빔'
    ]
    data.sort((a,b) => {
        let a_congest = a.citydata.LIVE_PPLTN_STTS.AREA_CONGEST_LVL;
        let b_congest = b.citydata.LIVE_PPLTN_STTS.AREA_CONGEST_LVL;
        console.log(SORT_KEY.indexOf(a_congest))
        return SORT_KEY.indexOf(a_congest) - SORT_KEY.indexOf(b_congest)
    })
    console.log(data);
    return data
}