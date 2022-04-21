import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Dropdown, Button, Modal } from "react-bootstrap";
import { FolderFill, FileEarmarkTextFill, Search, ThreeDotsVertical } from "react-bootstrap-icons";
import Rating from '@mui/material/Rating';

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

import SearchView from "./SearchView.jsx";



import "./Public.css";
import Publiccard from './Publiccard';

import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user/userSlice';
import { fetchUser } from '../../store/user/userActions';
import { filesActions } from '../../store/file/filesSlice';
import { fetchFiles } from '../../store/file/filesActions';
import { height } from "@mui/system";
import {API_URL,Client_Server} from "../../constants/routes";


const Public=()=> {
 
  const [search, updateSearch] = useState("");
  const [user, setUser] = useState([]);
  const [ratingValue, setRatingValue] = React.useState(0);
  const [rating, updateRating] = useState('');

  const userdata = useSelector((state) => state.user.user);
  console.log("in public state");
  

  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();

  useEffect(async () => {

    const getFiles = async () => {
      const res = await axios.get(`${API_URL}/files/public/files`);
      console.log(res.data);
      return res.data;
    };
    const data = await getFiles();
    console.log("in starred useeffect");
    console.log(data);
    setFiles(data);

  }, []);

  useEffect(() => {

    setUser({
      userId: userdata.userId,
      userPath: userdata.userPath,
      parentFolderId: "mydash"
    });
    console.log(user);
    //  getFolders();

  }, []);

  const [showModal, setShow] = useState(false);
  let textInput = React.createRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 
  // const handleFileReview = (userId,fileId,data) => {
  //   const info = data;
  //   console.log(data);
  //   updateRating(data);
  // };

  const inputClicked = (data) => {
    const info = data.target.value;
    console.log(info);
    updateSearch(info);
  };

  const dropdownFileItemPublic = (fileId, value) => {
    console.log(fileId + "File Added in public Section");
    axios.put(`${API_URL}/files/public/file/${fileId}`, { public: value }).then(() => {
      dispatch(fetchFiles(userdata.userId));
    });
  };


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
                    userId: userdata.userId,
                    userPath: userdata.userPath,
                    parentFolderId: userdata.parentFolderId,
                  }}
                ></Sidenavoptions>
              </Col>
            </Col>
            <div className="mainGradient">

              <Col xs={10}>

                <div className="header__search">
                  <Search></Search>

                  <input
                    id="searchId"
                    type="text"
                    placeholder="Search In Clore"
                    value={search}
                    onChange={inputClicked}
                  />


                </div>

                {search === "" ? null : <SearchView name={search} />}
                <Row>
                  {files
                    .filter((i) => i.userId === user.userId)
                    .map((i) => {
                      return (
                        <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">

                          <Card
                            id={i._id}
                            key={i._id}
                            className="cardStyle1"
                            onDoubleClick={() => {
                              window.open(`${API_URL}/files/file/${i._id}`);
                            }}
                            style={{
                              width: "10rem",
                              height: "8rem",
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
                                    variant="warning"
                                    className="dropButton"
                                    style={{
                                      marginLeft: "-13px",
                                      marginTop: "-8px",
                                      border: "none",
                                      color: "black",
                                    }}
                                  >
                                    <ThreeDotsVertical></ThreeDotsVertical>
                                  </Button>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    className="menuItem"
                                    href={`${API_URL}/files/file/download/${i._id}`}
                                    onClick={handleShow}
                                  >
                                    Download
                                  </Dropdown.Item>
                                  <Modal className="modal" show={showModal} onHide={handleClose}>
                                    <div className="modalHeader">
                                      <Modal.Header >
                                        <Modal.Title>Add Review</Modal.Title>
                                      </Modal.Header>
                                    </div>
                                    <Modal.Body>
                                      <Rating
                                        value={ratingValue}
                                        onChange={(event, newValue) => {
                                          setRatingValue(newValue);
                                        }}
                                      ></Rating>
                                    </Modal.Body>
                                    {/* <div className="modalHeader">
                                      <Modal.Footer>
                                        <Button
                                          variant="warning"
                                          onClick={handleClose}
                                        >
                                          Close
                                        </Button>
                                        <Button
                                          variant="warning"
                                          onClick={() => handleFileReview(i._id, user.userId)}
                                        >
                                          Save Changes
                                        </Button>
                                      </Modal.Footer>
                                    </div> */}
                                  </Modal>
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
                                  {i.public ? (
                                    <Dropdown.Item
                                      className=" menuItem"
                                      onClick={() =>
                                        dropdownFileItemPublic(i._id, !i.public)
                                      }
                                    >
                                      Remove From Public

                                    </Dropdown.Item>
                                  ) : (
                                    <Dropdown.Item
                                      className=" menuItem"
                                      onClick={() =>
                                        dropdownFileItemPublic(i._id, !i.public)
                                      }
                                    >
                                      Add to Public
                                    </Dropdown.Item>
                                  )}
                                  {/* <Dropdown.Item className='menuItem' onClick="" >
                                Move
                            </Dropdown.Item> */}
                                  {/* {value === "false"}: */}
                                  {/* <Dropdown.Item className=" menuItem" onClick="">
                                  Add to Starred
                                </Dropdown.Item>
                                ?
                                <Dropdown.Item className=" menuItem" onClick="">
                                  Remove From Starred
                                </Dropdown.Item>
                                <Dropdown.Item className=" menuItem" onClick="">
                                  Delete
                                </Dropdown.Item> */}
                                </Dropdown.Menu>
                              </Dropdown>
                              <FileEarmarkTextFill
                                style={{
                                  color: "rgb(54, 152, 243)",
                                  fontSize: "55px",
                                  marginTop: "-50px",
                                }}
                              ></FileEarmarkTextFill>
                              <Rating name="half-rating-read" defaultValue={parseInt(i.rate.totalRating/i.rate.ratings.length)} precision={0.5} readOnly />
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
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Public;