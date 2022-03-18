
import React, { useRef, useState } from "react";
import axios from "axios";
import "./UploadButton.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";


export default function UploadButton(props) {

  const API_URL = 'http://localhost:3000';

  const fileRef = useRef();
  const fileRef1 = useRef();

  const handleChange = (e) => {
    const files = e.target.files;
    console.log(files);
    console.log("In upload " + props.user.userId);
    console.log("In upload " + props.user.Path);
    console.log("In upload " + props.user.parentFolderId);

    const fdata = new FormData();

    fdata.append('userid', props.user.userId);
    fdata.append('userpath', props.user.Path);
    fdata.append('parentfolderid', props.user.parentFolderId);

    for (let i = 0; i < files.length; i++) {
      fdata.append('files', files[i]);
      // console.log(data.file[i]);
    }
    axios.post(`${API_URL}/files`, fdata)
      .then(response => console.log(response.data)).catch(err => console.log(err));
  };
  
  const myFunction = () => {
    var x = document.getElementById("button");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }


  }


  return (
    <div>
      <div id="button" className="simple" style={{display:"none",marginTop:"150px",marginLeft:"20px"}}>
        <Container fluid>
        
        
        <Button id="my2" className="button1"  style={{ borderRadius: "5px", border: "1px solid skyblue" }} onClick={() => fileRef.current.click()}>FolderUpload</Button>
        <Button id="hi" className="button1"  style={{ borderRadius: "5px", border: "1px solid skyblue" }} onClick={() => fileRef1.current.click()}>FileUpload</Button>
        </Container>
      </div>

      <Button  variant="warning" size="lg-4" style={{width:"70%",backgroundColor:" #ff9f02",color:"white"}} onClick={myFunction} >
        Upload
      </Button>
      <div>
      <input
      id="hi"
        ref={fileRef}
        onChange={handleChange}
        multiple={true}
        //  directory={fileRef.directory}
         webkitdirectory=""
        type="file"
        hidden
      />
      </div>
      <div>
      <input
      id="hi"
        ref={fileRef1}
        onChange={handleChange}
        multiple={true}
        //  directory={fileRef.directory}
         //webkitdirectory=""
        type="file"
        hidden
      />
      </div>
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