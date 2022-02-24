import React from 'react';
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    useLocation,useParams,Link
  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
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

import './SecondView.css';

function SecondView() {

    const {id} = useParams();
    const location = useLocation()
    
    console.log(location.state['user']);
    // const [path, setPath] = useState('C:\\Users\\abhim\\OneDrive\\Desktop\\upload\\620127cbd5fd607a2321d36b');
    const [user,setUser] = useState(location.state['user'].path);
    console.log(user);
    const [folders, setFolders] = useState([]);
     const [files, setFiles] = useState([]);
 
     useEffect(() => {
         getFolders();
     }, [])
 
     
 
     const getFolders = async () => {
         const resFolders = await axios.get("http://localhost:3000/folders/"+location.state['user'].userid);
         const resFiles = await axios.get("http://localhost:3000/files/"+location.state['user'].userid);
        // console.log(resFolders.data);
       //  console.log(resFiles.data);
         //console.log(res.data);
         setFolders(resFolders.data);
         setFiles(resFiles.data);
      //   console.log("folders: ", folders);
     //    console.log("folders: ", files);
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
                             <UploadButton></UploadButton>
                             <Sidenavoptions></Sidenavoptions>
                         </Col>
                     </Col>
                     <Col xs={10}>
 
                         <Row>
 
                             {
                                 folders.filter(i => i.folderPath === location.state['user'].path).map((i) => {
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
 
                                 files.filter(i => i.folderPath === location.state['user'].path).map((i) => {
                                     return (
                                         <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                                             <Card style={{
                                                 width: "7rem", height: "7rem", marginRight: '-0.2rem',
                                                 borderRadius: "10px", boxShadow: "0.5px 0.5px 0.5px "
                                             }} >
                                                 <Card.Body>
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

export default SecondView;