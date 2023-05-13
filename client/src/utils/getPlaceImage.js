// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=bvL%2F7zpKUS9mMZG8HyncPdI%2B70oiNuYPtllND4NMCOjgsch9rO9BrMULUEE%2BaJFJtRNOvvf8MJh7ebHYxPNWfw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%84%9C%EC%9A%B8%20%EC%95%BC%EA%B2%BD%20%EC%B6%95%EC%A0%9C&_type=json
import axios from "axios"

const getPlaceImage = async (id, callback) => {
    return await axios.get('http://localhost:8000/place/img', {params: {id}})
    .then((res) => res.data.imgUrl).then((url) => callback(url));
}

export default getPlaceImage