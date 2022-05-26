import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, Row, Col, Dropdown, Button,Modal } from "react-bootstrap";
import { FolderFill, FileEarmarkTextFill, Search ,ThreeDotsVertical} from "react-bootstrap-icons";
import axios from "axios";
import {useSelector} from 'react-redux';
import Rating from '@mui/material/Rating';
import "./SearchView.css";

import {API_URL,Client_Server} from "../../constants/routes";

function SearchView(props) {
  

  const userdata = useSelector((state)=>state.user.user);

  const [files, setFiles] = useState([]);
  const [rating, updateRating] = useState('');
  const [ratingValue, setRatingValue] = React.useState(0);


  const [showModal, setShow] = useState(false);
  let textInput = React.createRef();
  const handleShow = () => setShow(true);
  const handleClose = () =>setShow(false);


  useEffect(async () => {

    const getFiles = async () => {
      const res = await axios.get(`${API_URL}/files/public/files`);
      console.log(res.data);
      return res.data;
    };
    const data = await getFiles();
    console.log("in search public");
    console.log(data);
    setFiles(data);
  }, []);

  return (

    <div>
      <Card style={{ height: "400px", width: "790px", marginTop: "5px" }}>
        <Card.Body>
          <Row>
            {files
              .filter((i) => i.fileName.toLowerCase().includes(props.name))
              .map((i) => {
                return (
                  <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
                    <Card
                      id={i._id}
                      key={i._id}
                      className="cardStyle1"
                      onDoubleClick={() => {
                        window.open(`${Client_Server}/getfile/${userdata.userId}/${i._id}`);
                      }}
                      style={{
                        width: "10rem",
                        height: "8rem",
                        marginRight: "-0.2rem",
                        borderRadius: "5px",
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
                                marginLeft: "-15px",
                                marginTop: "-8px",
                                border: "none",
                                color: "black",
                              }}
                            >
                              <ThreeDotsVertical/>
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

                                    axios.post(`${API_URL}/files/rate/file/${i._id}`,{rating :newValue });

                                  }}
                                ></Rating>
                              </Modal.Body>
                            </Modal>
                        

                            <Dropdown.Item
                              className="menuItem"
                              onClick=""
                            >
                              Share
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
        </Card.Body>
      </Card>
    </div>

  );
}

export default SearchView;
