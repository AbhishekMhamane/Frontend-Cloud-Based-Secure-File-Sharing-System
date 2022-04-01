import {useRef,useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './Sidenav/Sidenavoptions.css';
import { Star } from 'react-bootstrap-icons';
import { Trash } from 'react-bootstrap-icons';
import { ClockHistory } from 'react-bootstrap-icons';
import { Tablet } from 'react-bootstrap-icons';
import { Grid3x3GapFill } from 'react-bootstrap-icons';
import { QuestionCircle } from 'react-bootstrap-icons';
import { ShareFill } from 'react-bootstrap-icons';
import { Gear } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

import Logo from './Sidenav/Clore_Logo.png';
import {Image} from 'react-bootstrap';
import { getValue } from '@testing-library/user-event/dist/utils';

function Sidenavoptions(props) {
    console.log("In side " + props.user.userId);
    console.log("In side " + props.user.Path);
    console.log("In side " + props.user.parentFolderId);

    const fileRef = useRef();
  const fileRef1 = useRef();

  const handleChange = (e) => {
    const files = e.target.files;
    console.log(files);
    console.log("In upload " + props.user.userId);
    console.log("In upload " + props.user.Path);
    console.log("In upload " + props.user.parentFolderId);

    for (let i = 0; i < files.length; i++) {

        let fdata = new FormData();

        fdata.append('userid', props.user.userId);
        fdata.append('userpath', props.user.Path);
        fdata.append('parentfolderid', props.user.parentFolderId);
        fdata.append('files', files[i]);
        axios.post("http://localhost:3000/files", fdata)
            .then(response => console.log(response.data)).catch(err => console.log(err));
        // console.log(data.file[i]);
    }


  };


   const handleCreateFolder = () =>{
       
    alert("In foldercreate " + props.user.userId);
    alert("In foldercreate " + props.user.Path);
    alert("In foldercreate " + props.user.parentFolderId);
    console.log(props.user.parentFolderId);
    axios.post('http://localhost:3000/folders/',{
        userId : props.user.userId,
        folderName : "tst",
        folderPath : props.user.Path,
        parentFolderId : props.user.parentFolderId
    });
    
   }



      const [showModal, setShow] = useState(false);
      let textInput = React.createRef();
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const handleShow1 =() =>{
          let folderName = textInput.current.value;
          console.log("Folder Created "+folderName);
          setShow(false);
      }
    

    return (
        <div>
             
                        
        <div className='sidenav'>
           
                        <Container fluid >
                    <div className='header__logo'>
                        <Image className='rounded-circle' src={Logo}></Image>
                        <span style={{color:"#ff9f02"}}><b><i>C</i></b></span>
                        <span style={{color:"#ff9f02",marginLeft:"0px"}}><b><i>L</i></b></span>
                        <span style={{color:"white",marginLeft:"0px"}}><b><i>O</i></b></span>
                        <span style={{color:"#ff9f02",marginLeft:"0px"}}><b><i>R</i></b></span>
                        <span style={{color:"#ff9f02",marginLeft:"0px"}}><b><i>E</i></b></span>

                    </div>

                </Container>
            <div className='sidenav__options' >
                <Grid3x3GapFill />
                <span>
                    Dashboard

                </span>

            </div>
            <div className='sidenav__options'>
                <Star />
                <span>
                    Starred
                </span>
            </div >
            <div className='sidenav__options'>
                <ShareFill />
                <span >
                    Shared
                </span>
            </div >
            <div className='sidenav__options'>
                <Gear />
                <span >
                    Setting
                </span>
            </div >
            <div className='sidenav__options'>
                <PersonCircle />
                <span >
                    User
                </span>
            </div >
            <div className='sidenav__options'>
                <QuestionCircle />
                <span >
                    Help
                </span>
            </div>
            </div>
                <div>
                    <Dropdown >
                        <Dropdown.Toggle variant='warning'  style={{marginTop:"-40px",backgroundColor:" #ff9f02",color:"white"}} >
                            Upload
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{marginBottom:"10px",marginLeft:"-30px",backgroundColor:"transparent"}}>
                            <Dropdown.Item onClick={() => fileRef1.current.click()} className="dropHover" >
                                File Upload
                            </Dropdown.Item>
                            
                            <Dropdown.Item className="dropHover" onClick={handleShow}>
                                Create New Folder
                            </Dropdown.Item>
                            <Modal show={showModal} onHide={handleClose}>
                                                                <Modal.Header >
                                                                    <Modal.Title>Craete New Folder</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <label>
                                                                        New Folder name:
                                                                    </label>
                                                                    <input id= "textid" ref={textInput} type={"text"}></input>

                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleClose}>
                                                                        Close
                                                                    </Button>
                                                                    <Button variant="primary" onClick={handleShow1}>
                                                                        Save Changes
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>
                        </Dropdown.Menu>
                    </Dropdown>

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
            
        
        </div>
    )


}
export default Sidenavoptions;