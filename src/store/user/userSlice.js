import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name : 'user',
    initialState : {user:{}},
    reducers : {
        updateUser(state,action){
            console.log("in user slice");
            state.user.userId = action.payload.userId;
            state.user.userName = action.payload.userName;
            state.user.userPath= action.payload.userPath;
            state.user.parentFolderId = action.payload.parentFolderId;
            //console.log(state.user.userId);
        },
    },
});

export const userActions = userSlice.actions;

export default userSlice;