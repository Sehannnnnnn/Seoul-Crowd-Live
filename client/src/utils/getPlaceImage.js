import axios from "axios"

const getPlaceImage = async (id, callback) => {
    return await axios.get('http://localhost:8000/place/img', {params: {id}})
    .then((res) => res.data.imgUrl).then((url) => callback(url));
}

export default getPlaceImage