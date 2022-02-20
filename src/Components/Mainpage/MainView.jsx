import React from 'react';
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

import './MainView.css';

function MainView() {



    const data = [
        {
            fileName: "text.txt"
        }, {
            fileName: "text2.txt"
        }, {
            fileName: "txt.txt"
        }, {
            fileName: "xt.txt"
        }, {
            fileName: "tt.txt"
        }, {
            fileName: "t.txt"
        },
        {
            fileName: "text.txt"
        }, {
            fileName: "text2.txt"
        }, {
            fileName: "txt.txt"
        }, {
            fileName: "xt.txt"
        }, {
            fileName: "tt.txt"
        }, {
            fileName: "t.txt"
        },
        {
            fileName: "t.txt"
        }
    ];
    const folders = [
        { folderName: "abhi" },
        {
            folderName: "mahesh"
        }
    ];
  
    const dropdownItemDownload=()=>{
        
      console.log("Download");
        
    }
    const dropdownItemRename=()=>{
        
        console.log("Rename");
          
      }
      const dropdownItemShare=()=>{
        
        console.log("Share");
          
      }
      const dropdownItemDelete=()=>{
        
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
                                folders.map((i) => {
                                    return (

                                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                                            <Card style={{
                                                width: "7rem", height: "2.8rem", marginRight: '-0.2rem',
                                                borderRadius: "10px", boxShadow: "0.5px 0.5px 0.5px "
                                            }}>
                                                <Card.Body style={{ textAlign: 'left' }}>
                                                    <Card.Text style={{ color: "black", marginTop: "-4px" }}>
                                                        {i.folderName}
                                                    </Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <Row>
                            {

                                data.map((i) => {
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

                                                    <Card.Text style={{ marginLeft: "-5px", color: "black" }}>
                                                        {i.fileName}
                                                    
                                                    <Dropdown>
                                                        <Dropdown.Toggle className='dropdown' >
                                                         <ThreeDotsVertical/>   
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='dropdown-menu'>
                                                            <Dropdown.Item onClick={dropdownItemDownload}>
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
                                                </Card.Text>
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