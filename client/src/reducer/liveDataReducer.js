import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
    liveData : []
}

export const fetchLiveData = createAsyncThunk(
    "liveData/GET_LIVEDATA",
    async () => {
        const response = await axios.get('/info')
        return response.data;
    }
)

const liveDataSlice = createSlice({
    name: "liveData",
    initialState: initialState,
    reducers: {
        //장소 아이디 지정
        setPlaceId: (state, action) => {
            state.placeId = action.payload;
        },
        sortPlaceList: (state, action) => {
            const SORT_KEY = [
                '여유', '보통', '약간 붐빔', '붐빔', '매우 붐빔'
            ]
            if (action.payload === '여유') {
                state.liveData = state.liveData.sort((a,b) => {
                    let a_congest = a.citydata.LIVE_PPLTN_STTS.AREA_CONGEST_LVL;
                    let b_congest = b.citydata.LIVE_PPLTN_STTS.AREA_CONGEST_LVL;
                    return SORT_KEY.indexOf(a_congest) - SORT_KEY.indexOf(b_congest)
                })
            }
            else if (action.payload === '혼잡') {
                state.liveData = state.liveData.sort((a,b) => {
                    let a_congest = a.citydata.LIVE_PPLTN_STTS.AREA_CONGEST_LVL;
                    let b_congest = b.citydata.LIVE_PPLTN_STTS.AREA_CONGEST_LVL;
                    return SORT_KEY.indexOf(b_congest) - SORT_KEY.indexOf(a_congest)
                })
            }
            else if (action.payload === '여성비') {
                state.liveData = state.liveData.sort((a,b) => {
                    let a_female = a.citydata.LIVE_PPLTN_STTS.FEMALE_PPLTN_RATE;
                    let b_female = b.citydata.LIVE_PPLTN_STTS.FEMALE_PPLTN_RATE;
                    return b_female - a_female;
                })
            }
            else if (action.payload === '남성비') {
                state.liveData = state.liveData.sort((a,b) => {
                    let a_male = a.citydata.LIVE_PPLTN_STTS.MALE_PPLTN_RATE;
                    let b_male = b.citydata.LIVE_PPLTN_STTS.MALE_PPLTN_RATE;
                    return b_male - a_male;
                })
            }
            else if (action.payload === '10대') {
                state.liveData = state.liveData.sort((a,b) => 
                    b.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_10 - a.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_10
                )
            }
            else if (action.payload === '20대') {
                state.liveData = state.liveData.sort((a,b) => 
                    b.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_10 - a.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_10
                )
            }
            else if (action.payload === '30대') {
                state.liveData = state.liveData.sort((a,b) => 
                    b.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_30 - a.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_30
                )
            }
            else if (action.payload === '40대') {
                state.liveData = state.liveData.sort((a,b) => 
                    b.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_40 - a.citydata.LIVE_PPLTN_STTS.PPLTN_RATE_40
                )
            }
            else {
                console.log('Error!')
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLiveData.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchLiveData.fulfilled, (state, action) => {
                state.status = "succeed"
                state.liveData = action.payload;
            })
            .addCase(fetchLiveData.rejected, (state, action) => {
                state.status = "failed"
                state.liveData = {};
            })
    }
})

export default liveDataSlice.reducer;

export const {
    setPlaceId,
    sortPlaceList
} = liveDataSlice.actions;