import { writeFile } from "fs";
import { SEOUL_PLACE_LIST } from "../repository/SeoulPlaceList.js";
import { fetchLiveData } from "./fetchLiveData.js";
import path from 'path';
//장소별 실시간 정보 + XML 파싱 to JSON
export const fetchAllLiveData = async () => {
    const alldata = {};
    for (let {id, name} of SEOUL_PLACE_LIST) {
        const data = await fetchLiveData(id, name);
        alldata[id] = data;
    }
    writeFile(path.resolve('../DB', 'liveData.json'), JSON.stringify(alldata),  (err) => {
        if (err) {
          console.log('Failed to write updated data to file');
          return;
        }
        console.log('Updated file successfully');
      });
}