import {createSlice } from '@reduxjs/toolkit';

const foldersSlice = createSlice({
    name : 'folders',
    initilState : { folders : null },
    reducers : {
        updateFolders(state , action) {
            console.log("inside the folder Slice");
            state.folders = action.payload.folders;
        }
    }

});

export const foldersActions = foldersSlice.actions;

export default foldersSlice;