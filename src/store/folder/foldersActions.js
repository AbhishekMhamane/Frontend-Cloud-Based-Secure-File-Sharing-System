import axios from 'axios';
import {foldersActions} from './foldersSlice.js';
import {useDispatch} from 'react-redux';

export const fetchFolders = (emailId) =>{

  const API_URL = "http://localhost:3000";
 // const emailId = "abhimhamane13@gmail.com";

    return async (dispatch) => {

        const fetchHandle = async () =>{
            const res = await axios.get(`${API_URL}/folders/${emailId}`);
            return res.data;
        }

        try{
            const folders = await fetchHandle();
            console.log(folders);
            dispatch(foldersActions.updateFolders({folders}));
            return folders;
        }
        catch(err)
        {
            console.log(err);
        }
    }
}