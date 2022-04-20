import axios from 'axios';
import {filesActions} from './filesSlice.js';
import {useDispatch} from 'react-redux';
import {API_URL} from "../../constants/routes";

export const fetchFiles = (emailId) =>{


    return async (dispatch) => {

        const fetchHandle = async () =>{
            const res = await axios.get(`${API_URL}/files/${emailId}`);
            return res.data;
        }

        try{
            const files = await fetchHandle();
            console.log(files);
            dispatch(filesActions.updateFiles({files}));
            return files;
        }
        catch(err)
        {
            console.log(err);
        }
    }
}