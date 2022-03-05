import React from 'react';
import { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route, Navigate, Link, useParams,useLocation
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import UploadButton from './Sidenav/UploadButton.jsx';
import UploadButtonF from './Sidenav/UploadButtonF.jsx';

import Header1 from './Navbar/Header1.jsx';
import Sidenavoptions from './Sidenav/Sidenavoptions.jsx';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Dropdown, Modal, Button } from 'react-bootstrap';
import {FolderFill,FileEarmarkTextFill} from 'react-bootstrap-icons';
import './SecondView.css';

function SecondView() {

    const {id} = useParams();
    const location = useLocation()
    const [folders, setFolders] = useState([]);
     const [files, setFiles] = useState([]);
 
     useEffect(() => {
         getFolders();
     }, [])
 
     
 
     const getFolders = async () => {
         const resFolders = await axios.get("http://localhost:3000/folders/"+location.state['user'].userId);
         const resFiles = await axios.get("http://localhost:3000/files/"+location.state['user'].userId);
         setFolders(resFolders.data);
         setFiles(resFiles.data);
     }
 
     
 
     const dropdownItemDownload = (e) => {
 
 
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
     const dropdownItemDelete = () => {
 
         console.log("Delete");
 
     }
 
 
     return (
         <div>
             <Container fluid>
                 <Row>
                     <Col style={{ border: '1px solid black' }}>
                         <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                             <Header1></Header1>
                         </Col>
                     </Col>
                 </Row>
                 <Row >
                     <Col xs={2}>
                         <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                             <Sidenavoptions  user={{userId:location.state['user'].userId,
                             Path:location.state['user'].Path,
                             parentFolderId : id }} ></Sidenavoptions>
                         </Col>
                     </Col>
                     <Col xs={10} className="mainGradient" style={{ paddingBottom: "5rem", borderRadius: "10px", marginTop: "5px", marginBottom: "5px" }}>
 
                         <Row>
 
                             {
                                 folders.filter(i => i.parentFolderId === id ).map((i) => {
                                     return (
 
                                         <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                                             
                                                 <Card id={i._id} key={i._id} className='cardStyle' style={{
                                                     width: "10rem", height: "7rem", marginRight: '-0.2rem',
                                                     borderRadius: "10px", boxShadow: "0.5px 0.5px 0.5px ", }}
                                                     
                                                     >
                                                     <Card.Body >
                                                     <Dropdown className='drop' variant="outline-light">
                                                        <Dropdown.Toggle className='dropdownFolder' style={{ marginRight: "40px" }}  >
                                                            <Button variant='outline-light' className='dropButton' style={{ marginLeft: "-13px", marginTop: "-8px", border: "none", color: "black" }}><ThreeDotsVertical />
                                                            </Button>

                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='dropdown-menu'>
                                                            <Dropdown.Item className='menuItem' >
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
                                                                     New File name:
                                                                   </label>
                                                                   <input  ref={textInput}  type={"text"}></input>

                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleClose}>
                                                                        Close
                                                                    </Button>
                                                                    <Button variant="primary" onClick={handleChange}>
                                                                        Save Changes
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>
                                                            <Dropdown.Item className='menuItem' onClick={dropdownItemShare}>
                                                                Share
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className='menuItem' onClick="">
                                                                Move
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className='menuItem' onClick={dropdownItemDelete}>
                                                                Delete
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <FolderFill style={{ color: "rgba(245, 245, 43, 0.938)", fontSize: "55px", marginTop: "-50px" }}></FolderFill>


                                                    <Link to={{ pathname: `/folder/${i._id}` }} state={{ user: { userId: location.state['user'].userId , 
                                                     Path: i.folderPath+'/'+i.folderName } }} >
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
 
                                 files.filter( i => i.parentFolderId === id ).map((i) => {
                                     return (
                                         <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                                             <Card id={i._id} key={i._id} className='cardStyle1' style={{
                                                width: "7rem", height: "7rem", marginRight: '-0.2rem',
                                                borderRadius: "10px", boxShadow: "0.5px 0.5px 0.5px "
                                             }}  onDoubleClick={() =>{        
                                                window.open(`http://localhost:3000/files/file/${i._id}`)
                                            }}>
                                                 <Card.Body>
                                                 <Dropdown className='drop'>
                                                        <Dropdown.Toggle className='dropdownFolder1' style={{ marginRight: "40px" }}  >
                                                            <Button variant='outline-light' className='dropButton' style={{ marginLeft: "-13px", marginTop: "-8px", border: "none", color: "black" }}><ThreeDotsVertical />
                                                            </Button>

                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='dropdown-menu'>
                                                            <Dropdown.Item className="menuItem" href={`http://localhost:3000/files/file/download/${i._id}`} >
                                                                Download
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className='menuItem' onClick={handleShow} >
                                                                Rename
                                                            </Dropdown.Item>
                                                            <Modal show={showModal} onHide={handleClose}>
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Rename Folder</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                   <label>
                                                                     New File name:
                                                                   </label>
                                                                   <input  ref={textInput}  type={"text"}></input>

                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleClose}>
                                                                        Close
                                                                    </Button>
                                                                    <Button variant="primary" onClick={handleChange}>
                                                                        Save Changes
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>
                                                            <Dropdown.Item className='menuItem' onClick={dropdownItemShare}>
                                                                Share
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className='menuItem' onClick="">
                                                                Move
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className=" menuItem" onClick={dropdownItemDelete}>
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

export default SecondView;