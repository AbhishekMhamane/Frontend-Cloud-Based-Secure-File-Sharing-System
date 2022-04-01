import { React, useState, useEffect } from "react";
import { Card, Row, Col, Dropdown, Button } from "react-bootstrap";
import { FolderFill, FileEarmarkTextFill, Search } from "react-bootstrap-icons";
import axios from "axios";
import "./SearchView.css";

function SearchView(props) {
  const API_URL = "http://localhost:3000";

  const [files, setFiles] = useState([]);

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
    <>
      <div>
        <Card style={{ height: "400px", width: "790px", marginTop: "5px" }}>
          <Card.Body>
            <Row>
              {files
                .filter((i) => i.parentFolderId === "mydash")
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
                          width: "5rem",
                          height: "4rem",
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
                                variant="outline-light"
                                className="dropButton"
                                style={{
                                  marginLeft: "-13px",
                                  marginTop: "-8px",
                                  border: "none",
                                  color: "black",
                                }}
                              >
                              </Button>
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

                              <Dropdown.Item
                                className="menuItem"
                                onClick=""
                              >
                                Share
                              </Dropdown.Item>
                              {/* <Dropdown.Item className='menuItem' onClick="" >
                                                                Move
                                                            </Dropdown.Item> */}

                              {/* {value === "false"}: */}
                              {/* <Dropdown.Item className=" menuItem" onClick={() => dropdownFileItemStarred(i._id)}>
                                                                Add to Starred
                                                            </Dropdown.Item>
                                                             ?
                                                             <Dropdown.Item className=" menuItem" onClick={() => dropdownFileItemStarred(i._id)}>
                                                                Remove From Starred
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className=" menuItem" onClick={() => dropdownFileItemDelete(i._id)}>
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

                          <Card.Text className="footer1">
                            {i.fileName}
                          </Card.Text>
                        </Card.Body>
                        s
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default SearchView;
