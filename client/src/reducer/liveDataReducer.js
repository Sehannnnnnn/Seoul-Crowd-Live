import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
    liveData : {}
}

export const fetchLiveData = createAsyncThunk(
    "liveData/GET_LIVEDATA",
    async ({id}) => {
        console.log(id)
        try {
            const response = await axios.get('/info', {params: {id}})
            return response.data;
        } catch (e) {
            console.log(e.message);
            return {}
        }
    }
)

const liveDataSlice = createSlice({
    name: "liveData",
    initialState: initialState,
    reducers: {
        //장소 아이디 지정
        setPlaceId: (state, action) => {
            state.placeId = action.payload;
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
    setPlaceId
} = liveDataSlice.actions;