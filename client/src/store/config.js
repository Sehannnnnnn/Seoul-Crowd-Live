import {configureStore} from '@reduxjs/toolkit'
import placeReducer from '../reducer/placeReducer';

const store = configureStore({
    reducer: {
        place: placeReducer,
    }
})

export default store;