import React from 'react';
import { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,Navigate,Link,useParams,
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
import { Dropdown } from 'react-bootstrap';
import './MainView.css';

function MainView() {

    const [user, setUser] = useState({userId:'maheshkadam@gmail.com',
    Path:'C:\\Users\\abhim\\OneDrive\\Desktop\\upload\\620127cbd5fd607a2321d36b',
    parentFolderId : 'mydash'});
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
    const dropdownItemRename = () => {

        console.log("Rename");

    }
    const dropdownItemShare = () => {

        console.log("Share");

    }
    const dropdownItemDelete = () => {

        console.log("Delete");

    }

    const handleChange=()=>{
        console.log("calling change");
        getFolders();
    }
    
    const handleView=(e)=>{
        
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
                            <UploadButton user={user} />
                            {/* <UploadButtonF user={user} /> */}
                            <Sidenavoptions></Sidenavoptions> 
                        </Col>
                    </Col>
                    <Col xs={10}>

                        <Row>

                            {
                                folders.filter(i => i.parentFolderId === 'mydash').map((i) => {
                                    return (

                                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                                            <Link to={{ pathname: `/folder/${i._id}` }} state={{ user: { userId: user.userId, 
                                                Path: i.folderPath+'/'+i.folderName} }} >
                                                <Card id={i._id} key={i._id} style={{
                                                    width: "7rem", height: "2.8rem", marginRight: '-0.2rem',
                                                    borderRadius: "10px", boxShadow: "0.5px 0.5px 0.5px "
                                                }}>
                                                    <Card.Body style={{ textAlign: 'left' }}>
                                                        <Card.Text style={{ color: "black", marginTop: "-4px" }}>
                                                            {i.folderName}
                                                        </Card.Text>

                                                    </Card.Body>
                                                </Card>
                                            </Link>
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
                                            <Card onDoubleClick={()=>handleView(i)} style={{
                                                width: "7rem", height: "7rem", marginRight: '-0.2rem',
                                                borderRadius: "10px", boxShadow: "0.5px 0.5px 0.5px "
                                            }} >
                                          
                                                <Card.Body>

                                                    <Card.Text>

                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer className='footer'>

                                                    <Card.Text className='footer1' style={{ marginLeft: "-5px", overFlow: "scroll", color: "black" }}>
                                                        {i.fileName}
                                                        </Card.Text>

                                                        

                                                        <Dropdown>
                                                            <Dropdown.Toggle className='dropdown' >
                                                                <ThreeDotsVertical />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className='dropdown-menu'>
                                                                <Dropdown.Item href={'http://localhost:3000/files/file/download/' + i._id}>
                                                                    Download
                                                                </Dropdown.Item>
                                                                <Dropdown.Item onClick={dropdownItemRename} >
                                                                    Rename
                                                                </Dropdown.Item>
                                                                <Dropdown.Item onClick={dropdownItemShare}>
                                                                    Share
                                                                </Dropdown.Item>
                                                                <Dropdown.Item onClick={dropdownItemDelete}>
                                                                    Delete
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                </Card.Footer>
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