import { readFileSync } from "fs"
import path from "path";
//fetch 하지 않고 JSON에서 읽어오기
export const readInfoDB = async (id, placeName) => {
    const response = readFileSync(path.resolve('../DB', 'liveData.json'))
    const data = Object.values(JSON.parse(response)).filter((data) => data.id === id);
    if (data.length !== 1) {
        return []
    } else {
        return data;
    }
}