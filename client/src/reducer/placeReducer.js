import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    status : "idle",  //'idle' | 'loading' | 'succeeded' | 'failed'
    placeList : [],
}

export const fetchPlaceList = createAsyncThunk(
    "place/GET_LIST",
    async () => {
        try {
            const response = await axios.get(`/place`);
            return response.data
        } catch (e) {
            console.log(e.message);
            return [];
        }
    }
)

const placeSlice = createSlice({
    name: "place",
    initialState: initialState,
    reducers: {
        //fetch placeList 
        getPlaceList: (state, action) => {
            state.placeList = action.payload;
        }
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlaceList.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchPlaceList.fulfilled, (state, action) => {
                state.status = "succeed"
                state.placeList = action.payload;
            })
            .addCase(fetchPlaceList.rejected, (state, action) => {
                state.status = "failed"
                state.placeList = [];
            })
    }
})

export default placeSlice.reducer;