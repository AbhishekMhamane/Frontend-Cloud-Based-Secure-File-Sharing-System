import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import filesSlice from './filesSlice';

const store = configureStore({
    reducer : {
        user : userSlice.reducer,
        files : filesSlice.reducer,
    }
});

export default store;