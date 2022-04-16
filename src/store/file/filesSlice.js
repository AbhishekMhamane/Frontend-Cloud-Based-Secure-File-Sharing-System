import {createSlice} from '@reduxjs/toolkit';

const filesSlice = createSlice({
    name : 'files',
    initialState : {files:null },
    reducers : {
        updateFiles(state,action){
            console.log("in file slice");
            state.files  = action.payload.files;
            //console.log(state.user.userId);
        },
    },
});

export const filesActions = filesSlice.actions;

export default filesSlice;