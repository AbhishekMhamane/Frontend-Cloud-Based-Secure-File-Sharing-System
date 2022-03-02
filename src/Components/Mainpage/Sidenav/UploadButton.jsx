
import React, { useRef, useState } from "react";
import axios from "axios";
import "./UploadButton.css";


export default function UploadButton(props) {
  const fileRef = useRef();

  const handleChange = (e) => {
    const files = e.target.files;
    console.log(files);
    console.log("In upload "+props.user.userId);
    console.log("In upload "+props.user.Path);
    console.log("In upload "+props.user.parentFolderId);

    const fdata = new FormData();

        fdata.append('userid',props.user.userId);
        fdata.append('userpath', props.user.Path);
        fdata.append('parentfolderid',props.user.parentFolderId);

        for (let i = 0; i < files.length; i++) {
            fdata.append('files', files[i]);
            // console.log(data.file[i]);
        }
        axios.post("http://localhost:3000/files", fdata)
        .then(response => console.log(response.data)).catch(err => console.log(err));
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
      //  directory={fileRef.directory}
       // webkitdirectory=""
        type="file"
        hidden
      />
    </div>
  );
}


/*
<Card style={{width:"7rem",height:"7rem",borderRadius:"10px",boxShadow:"2px 2px 2px aqua"}} >
  <Card.Body>
    
    <Card.Text>
      
    </Card.Text>
  </Card.Body>
  <Card.Footer style={{color:"skyBlue",height:"40px"}}>
   
    <Card.Text style={{marginLeft:"-5px"}}>
      FileName
    </Card.Text>
    
    <button className="button1"style={{width:"20px",height:"-20px",opacity:"transperant"}}><ThreeDotsVertical></ThreeDotsVertical></button>
  </Card.Footer>
</Card>
*/
/*
 <Dropdown className='button1'>
      <Dropdown.Toggle className='button1' id="dropdown-basic"><ThreeDotsVertical></ThreeDotsVertical></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Download</Dropdown.Item>
        <Dropdown.Item>Rename</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
        <Dropdown.Item>Share</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    */