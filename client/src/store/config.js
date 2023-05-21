import {configureStore} from '@reduxjs/toolkit'
import liveDataReducer from '../reducer/liveDataReducer';
import placeReducer from '../reducer/placeReducer';

const store = configureStore({
    reducer: {
        place: placeReducer,
        liveData: liveDataReducer
    }
})

export default store;