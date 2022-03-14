import React from 'react';
import { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route, Navigate, Link, useParams,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import UploadButton from './Sidenav/UploadButton.jsx';
import UploadButtonF from './Sidenav/UploadButtonF.jsx';

import Header1 from './Navbar/Header1.jsx';
import Sidenavoptions from './Sidenavoptions.jsx';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Dropdown, Modal, Button } from 'react-bootstrap';
import './MainView.css';
import { FolderFill, FileEarmarkTextFill, Search } from 'react-bootstrap-icons';



function MainView() {

    const [user, setUser] = useState({
        userId: 'maheshkadam@gmail.com',
        Path: 'C:\\Users\\abhim\\OneDrive\\Desktop\\upload\\620127cbd5fd607a2321d36b',
        parentFolderId: 'mydash'
    });
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        getFolders();
    }, [])

    const getFolders = async () => {
        const resFolders = await axios.get("http://localhost:3000/folders/maheshkadam@gmail.com");
        const resFiles = await axios.get("http://localhost:3000/files/maheshkadam@gmail.com");
        setFolders(resFolders.data);
        setFiles(resFiles.data);

    }



    const dropdownItemDownload = (e) => {

        axios.get("http://localhost:3000/files/file/download/" + e);
        alert("http://localhost:3000/files/file/download/" + e);
        console.log("Download");

    }
    const [showModal, setShow] = useState(false);
    let textInput = React.createRef();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {

        console.log(textInput.current.value);
        setShow(false);
    }

    const dropdownItemShare = () => {

        console.log("Share");

    }
    const dropdownItemDelete = (props) => {

        console.log("Delete");

    }

    //folder options

    const handleFolderRename = (folderId) =>{
        console.log(textInput.current.value);
        axios.put('http://localhost:3000/folders/'+folderId,{newName:textInput.current.value});
        setShow(false);
    }

    const dropdownFolderDelete = (folderId) =>{
        axios.delete(`http://localhost:3000/folders/${folderId}`);
    }

    //files options
    const dropdownFileItemStarred = (fileId) => {
        console.log(fileId +"File Added in Starred Section");

    }
    const dropdownFileItemDelete = (fileId) => {
        alert("file deleted");
        axios.delete('http://localhost:3000/files/file/'+fileId);
    }

    const handleFileRename = (fileId) =>{
        console.log(textInput.current.value);
        axios.put('http://localhost:3000/files/file/'+fileId,{fileName:textInput.current.value});
        setShow(false);
    }

    return (
        <div>
            <Container fluid>
                {/* <Row style={{ marginLeft: "-10px", marginRight: "-10px" }}>
                    <Col style={{ marginLeft: "0px", paddingLeft: "0px", paddingRight: "0px" }}>
                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' style={{ paddingLeft: 0, paddingRight: "0px" }} >
                            <Header1></Header1>
                        </Col>
                    </Col>
                </Row> */}
                <Row >
                    <Col xs={2}>
                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                            {/* <UploadButton user={user} /> */}
                            {/* <UploadButtonF user={user} /> */}
                            <Sidenavoptions user={user} ></Sidenavoptions>
                        </Col>
                    </Col>
                    <Col xs={10} className="mainGradient" style={{ paddingBottom: "3rem", borderRadius: "10px", marginBottom: "5px" }}>
                        <div className='header__search'>
                            <Search></Search>
                            <input type="text" placeholder='Search In Clore' />
                        </div>
                        <Row>

                            {
                                folders.filter(i => i.parentFolderId === 'mydash').map((i) => {
                                    return (

                                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >

                                            <Card id={i._id} key={i._id} className='cardStyle' style={{
                                                width: "10rem", height: "7rem", marginRight: '-0.2rem',
                                                borderRadius: "10px", boxShadow: "0.5px 0.5px 0.5px ",
                                            }}>
                                                <Card.Body>
                                                    <Dropdown className='drop' variant="outline-light">
                                                        <Dropdown.Toggle className='dropdownFolder' style={{ marginRight: "40px" }}  >
                                                            <Button variant='outline-light' className='dropButton' style={{ marginLeft: "-13px", marginTop: "-8px", border: "none", color: "black" }}><ThreeDotsVertical />
                                                            </Button>

                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='dropdown-menu'>
                                                            <Dropdown.Item className='menuItem' onClick={dropdownItemDownload}>
                                                                Download
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className='menuItem' onClick={handleShow}>
                                                                Rename
                                                            </Dropdown.Item>
                                                            <Modal show={showModal} onHide={handleClose}>
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Rename Folder</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <label>
                                                                        New Folder name:
                                                                    </label>
                                                                    <input ref={textInput} type={"text"}></input>

                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleClose}>
                                                                        Close
                                                                    </Button>
                                                                    <Button variant="primary" onClick={()=>handleFolderRename(i._id)}>
                                                                        Save Changes
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>
                                                            <Dropdown.Item className='menuItem' onClick={dropdownItemShare}>
                                                                Share
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className='menuItem' onClick="" >
                                                                Move
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className='menuItem' onClick={() => dropdownFolderDelete(i._id)}>
                                                                Delete
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <FolderFill style={{ color: "rgba(245, 245, 43, 0.938)", fontSize: "55px", marginTop: "-50px" }}></FolderFill>
                                                    <Link to={{ pathname: `/folder/${i._id}` }} state={{
                                                        user: {
                                                            userId: user.userId,
                                                            Path: i.folderPath 
                                                        }
                                                    }} >
                                                        <Card.Text className='footer1'>
                                                            {i.folderName}
                                                        </Card.Text>

                                                    </Link>

                                                </Card.Body>


                                            </Card>

                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <Row>
                            {

                                files.filter(i => i.parentFolderId === 'mydash').map((i) => {
                                    return (
                                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                                            <Card id={i._id} key={i._id} className='cardStyle1' onDoubleClick={() => {
                                                window.open(`http://localhost:3000/files/file/${i._id}`)

                                            }} style={{
                                                width: "7rem", height: "7rem", marginRight: '-0.2rem',
                                                borderRadius: "10px", boxShadow: "0.5px 0.5px 0.5px "
                                            }} >

                                                <Card.Body>
                                                    <Dropdown className='drop'>
                                                        <Dropdown.Toggle className='dropdownFolder1' style={{ marginRight: "40px" }}  >
                                                            <Button variant='outline-light' className='dropButton' style={{ marginLeft: "-13px", marginTop: "-8px", border: "none", color: "black" }}><ThreeDotsVertical />
                                                            </Button>

                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='dropdown-menu'>
                                                            <Dropdown.Item className="menuItem" href={`http://localhost:3000/files/file/download/${i._id}`}>
                                                                Download
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className='menuItem' onClick={handleShow} >
                                                                Rename
                                                            </Dropdown.Item>

                                                            <Modal show={showModal} onHide={handleClose}>
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Rename File</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <label>
                                                                        New File name:
                                                                    </label>
                                                                    <input ref={textInput} type={"text"}></input>

                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleClose}>
                                                                        Close
                                                                    </Button>
                                                                    <Button variant="primary" onClick={()=>handleFileRename(i._id)}>
                                                                        Save Changes
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>

                                                            <Dropdown.Item className='menuItem' onClick={dropdownItemShare}>
                                                                Share
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className='menuItem' onClick="" >
                                                                Move
                                                            </Dropdown.Item>

                                                            <Dropdown.Item className=" menuItem" onClick={() => dropdownFileItemStarred(i._id)}>
                                                                Add to Starred
                                                            </Dropdown.Item>

                                                            <Dropdown.Item className=" menuItem" onClick={() => dropdownFileItemDelete(i._id)}>
                                                                Delete
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <FileEarmarkTextFill style={{ color: "rgb(54, 152, 243)", fontSize: "55px", marginTop: "-50px" }}></FileEarmarkTextFill>

                                                      

                                                    <Card.Text className='footer1'>
                                                        {i.fileName}
                                                    </Card.Text>

                                                </Card.Body>

                                            </Card>

                                        </Col>
                                    )
                                })
                            }

                        </Row>
                    </Col>


                </Row>
            </Container>
        </div>
    )
}

export default MainView;