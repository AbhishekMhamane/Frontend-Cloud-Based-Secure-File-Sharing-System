import axios from 'axios';
import {filesActions} from '../store/filesSlice';
import {useDispatch} from 'react-redux';

export const fetchFiles = (emailId) =>{

  const API_URL = "http://localhost:3000";
 // const emailId = "abhimhamane13@gmail.com";

    return async (dispatch) => {

        const fetchHandle = async () =>{
            const res = await axios.get(`${API_URL}/files/${emailId}`);
            return res.data;
        }

        try{
            const files = await fetchHandle();
            console.log(files);
            dispatch(filesActions.updateFiles({files}));
        }
        catch(err)
        {
            console.log(err);
        }
    }
}