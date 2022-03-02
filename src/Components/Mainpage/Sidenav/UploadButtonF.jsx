
import React, { useRef, useState } from "react";
import axios from "axios";
import "./UploadButton.css";


export default function UploadButtonF(props) {
  const fileRef = useRef();

  const handleChange = (e) => {
    

    const files = e.target.files;
    const foldername = e.target.folders;
    console.log(foldername);
    console.log(files);
    console.log(props.user.userid+" "+ props.user.path);
    const fdata = new FormData();

        fdata.append('userid',props.user.userid);
        fdata.append('userpath', props.user.path);

        for (let i = 0; i < files.length; i++) {
          const temp = new FormData();
          temp.append('file',files[i]);
          temp.append('filepath',files[i].webkitRelativePath);

          fdata.append('files',temp);
            // console.log(data.file[i]);
        }
        console.log(fdata);


    //     axios.post("http://localhost:3000/files/folder", fdata)
    //     .then(response => console.log(response.data)).catch(err => console.log(err));
  };


  return (
    <div>
      <button  onClick={() => fileRef.current.click()} className="button">
        Upload
      </button>
      <input
        ref={fileRef}
        onChange={handleChange}
        multiple={true}
        webkitdirectory="true"
        type="file"
        hidden
        mozdirectory msdirectory odirectory directory
      />
    </div>
  );
}
