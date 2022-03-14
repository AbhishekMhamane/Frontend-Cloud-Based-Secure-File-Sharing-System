import { useRef,useState } from 'react';
import React from 'react';
import './Sidenavoptions.css';
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
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import UploadButton from './UploadButton';

import Logo from './Clore_Logo.png';
import { Image } from 'react-bootstrap';

import {Modal} from 'react-bootstrap';
function Sidenavoptions(props) {
    console.log("In side " + props.user.userId);
    console.log("In side " + props.user.Path);
    console.log("In side " + props.user.parentFolderId);

    const fileRef = useRef();
    const fileRef1 = useRef();

    const [showModal, setShow] = useState(false);
    let textInput = React.createRef();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange1 = (e) => {

        console.log(textInput.current.value);
        setShow(false);
    }

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
        axios.post("http://localhost:3000/files", fdata)
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


            <div className='sidenav'>

                <Container fluid >
                    <div className='header__logo'>
                        <Image className='rounded-circle' src={Logo}></Image>
                        <span style={{ color: "#ff9f02" }}><b><i>C</i></b></span>
                        <span style={{ color: "#ff9f02", marginLeft: "0px" }}><b><i>L</i></b></span>
                        <span style={{ color: "white", marginLeft: "0px" }}><b><i>O</i></b></span>
                        <span style={{ color: "#ff9f02", marginLeft: "0px" }}><b><i>R</i></b></span>
                        <span style={{ color: "#ff9f02", marginLeft: "0px" }}><b><i>E</i></b></span>

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
                {/* <div id="button" className="simple" style={{ display: "none", marginTop: "150px", marginLeft: "20px" }}>
                        <Container fluid>


                            <Button id="my2" className="button1" style={{ borderRadius: "5px", border: "1px solid skyblue" }} onClick={() => fileRef.current.click()}>FolderUpload</Button>
                            <Button id="hi" className="button1" style={{ borderRadius: "5px", border: "1px solid skyblue" }} onClick={() => fileRef1.current.click()}>FileUpload</Button>
                        </Container>
                    </div>

                    <Button variant="warning" size="lg-4" style={{ width: "70%", backgroundColor: " #ff9f02", color: "white" }} onClick={myFunction} >
                        Upload
                    </Button> */}
                <Dropdown >
                    <Dropdown.Toggle variant='warning' style={{ marginTop: "-40px", backgroundColor: " #ff9f02", color: "white" }} >
                        Upload
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ marginBottom: "10px", marginLeft: "-30px", backgroundColor: "transparent" }}>
                        <Dropdown.Item onClick={() => fileRef1.current.click()} className="dropHover" >
                            File Upload
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => fileRef.current.click()} className="dropHover">
                            Upload Folder
                        </Dropdown.Item>
                        <Dropdown.Item className="dropHover" onClick={handleShow}>
                            Create New Folder
                        </Dropdown.Item>
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create Folder</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <label>
                                     Folder name:
                                </label>
                                <input ref={textInput} type={"text"}></input>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleChange1}>
                                    Create
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