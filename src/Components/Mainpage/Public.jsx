import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { FolderFill, FileEarmarkTextFill, Search } from "react-bootstrap-icons";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

import Sidenavoptions from "./Sidenav/Sidenavoptions.jsx";
import axios from "axios";

import "./Public.css";
import Publiccard from './Publiccard';

import { useSelector } from "react-redux";

function Public() {

  const user = useSelector((state) => state.user.user);
  console.log("in starred state");
 
  const API_URL = "http://localhost:3000";
  const [files, setFiles] = useState([]);

  useEffect(async () => {
    
    const getFiles = async () => {
      const res = await axios.get(
        `${API_URL}/files/public/files`
      );
      console.log(res.data);
      return res.data;
    };
    const data = await getFiles();
    console.log("in starred useeffect");
    console.log(data);
    setFiles(data);

  }, []);

  return (
    <>
      <div>
        <Container fluid>
          {/* <Row style={{ marginLeft: "-10px", marginRight: "-10px" }}>
                    <Col style={{ marginLeft: "0px", paddingLeft: "0px", paddingRight: "0px" }}>
                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' style={{ paddingLeft: 0, paddingRight: "0px" }} >
                            <Header1></Header1>
                        </Col>
                    </Col>
                </Row> */}
          <Row>
            <Col xs={2}>
              <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
                {/* <UploadButton user={user} /> */}
                {/* <UploadButtonF user={user} /> */}
                <Sidenavoptions
                  user={{
                    userId: user.userId,
                    userPath: user.userPath,
                    parentFolderId: user.parentFolderId,
                  }}
                ></Sidenavoptions>
              </Col>
            </Col>

            <Col sx={10}>
            <Row>
              {files
                .filter((i) => i.userId === user.userId)
                .map((i) => {
                  return (
                    <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
                      
                     <Publiccard file={i} />

                      <Card
                        id={i._id}
                        key={i._id}
                        className="cardStyle1"
                        onDoubleClick={() => {
                          window.open(`${API_URL}/files/file/${i._id}`);
                        }}
                        style={{
                          width: "7rem",
                          height: "7rem",
                          marginRight: "-0.2rem",
                          borderRadius: "10px",
                          boxShadow: "0.5px 0.5px 0.5px ",
                        }}
                      >
                        <Card.Body>
                          <Dropdown className="drop">
                            <Dropdown.Toggle
                              className="dropdownFolder1"
                              style={{ marginRight: "40px" }}
                            >
                              <Button
                                variant="outline-light"
                                className="dropButton"
                                style={{
                                  marginLeft: "-13px",
                                  marginTop: "-8px",
                                  border: "none",
                                  color: "black",
                                }}
                              ></Button>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu">
                              <Dropdown.Item
                                className="menuItem"
                                href={`${API_URL}/files/file/download/${i._id}`}
                              >
                                Download
                              </Dropdown.Item>
                              {/* <Dropdown.Item className='menuItem' onClick={handleShow} >
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
                                    <Button variant="primary" onClick={() => handleFileRename(i._id)}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal> */}
                              <Dropdown.Item className="menuItem" onClick="">
                                Share
                              </Dropdown.Item>
                              {/* <Dropdown.Item className='menuItem' onClick="" >
                                Move
                            </Dropdown.Item> */}
                              {/* {value === "false"}: */}
                              <Dropdown.Item className=" menuItem" onClick="">
                                Add to Starred
                              </Dropdown.Item>
                              ?
                              <Dropdown.Item className=" menuItem" onClick="">
                                Remove From Starred
                              </Dropdown.Item>
                              <Dropdown.Item className=" menuItem" onClick="">
                                Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <FileEarmarkTextFill
                            style={{
                              color: "rgb(54, 152, 243)",
                              fontSize: "55px",
                              marginTop: "-50px",
                            }}
                          ></FileEarmarkTextFill>

                          <Card.Text className="footer1">
                            {i.fileName}
                          </Card.Text>

                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default Public;