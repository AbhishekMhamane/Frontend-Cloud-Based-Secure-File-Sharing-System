import React from 'react';
import { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,Navigate,Link
  } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import UploadButton from './Sidenav/UploadButton.jsx';
import Header1 from './Navbar/Header1.jsx';
import Sidenavoptions from './Sidenav/Sidenavoptions.jsx';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Dropdown } from 'react-bootstrap';

import './MainView.css';

function MainView() {

    const [user, setUser] = useState({userid:'maheshkadam@gmail.com',path:'C:\\Users\\abhim\\OneDrive\\Desktop\\upload\\620127cbd5fd607a2321d36b'});
   // const [path, setPath] = useState('C:\\Users\\abhim\\OneDrive\\Desktop\\upload\\620127cbd5fd607a2321d36b');
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        //getUser();
        getFolders();
        //getFiles();
    }, [])

    // const getUser = async () => {
    //     const res = await axios.get('http://localhost:3000/users/maheshkadam@gmail.com');
    //     console.log(res.data);
    //     setUser(res.data);
    //     //console.log(user[0].userId);
    //     setPath(res.data[0].userPath);
    //     console.log(path)

    // }

    const getFolders = async () => {
        const resFolders = await axios.get("http://localhost:3000/folders/maheshkadam@gmail.com");
        const resFiles = await axios.get("http://localhost:3000/files/maheshkadam@gmail.com");
       // console.log(resFolders.data);
      //  console.log(resFiles.data);
        //console.log(res.data);
        setFolders(resFolders.data);
        setFiles(resFiles.data);
     //   console.log("folders: ", folders);
    //    console.log("folders: ", files);
    }

    // const getFiles = async () => {
    //     //console.log(res.data);
    //     setFiles(res.data);
    //     console.log(res.data);
    //     console.log("files: ", files);
    // }


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
                            <UploadButton user={user} onChange={getFolders()}/>
                            <Sidenavoptions></Sidenavoptions>
                        </Col>
                    </Col>
                    <Col xs={10}>

                        <Row>

                            {
                                folders.filter(i => i.folderPath === user.path).map((i) => {
                                    return (

                                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                                            <Link to={{ pathname: `/folder/${i._id}` }} state={{ user: { userid: "maheshkadam@gmail.com", path: i.folderPath+'/'+i.folderName } }} >
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

                                files.filter(i => i.folderPath === user.path).map((i) => {
                                    return (
                                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                                            <Card style={{
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