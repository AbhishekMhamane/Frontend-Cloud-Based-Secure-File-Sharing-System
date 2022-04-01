import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Sidenavoptions from './Sidenavoptions.jsx';
import { Card } from 'react-bootstrap';
import './Starred.css';

function Starred() {
    return(
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
                <Row >
                    <Col xs={2}>
                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                            {/* <UploadButton user={user} /> */}
                            {/* <UploadButtonF user={user} /> */}
                            <Sidenavoptions user={user} ></Sidenavoptions>
                        </Col>
                    </Col>
                    
                    <Row>
                            {

                                files.filter(i => i.parentFolderId === 'mydash').map((i) => {
                                    return (
                                        <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto' >
                                            <Card id={i._id} key={i._id} className='cardStyle1' onDoubleClick={() => {
                                                window.open(`${API_URL}/files/file/${i._id}`)

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
                                                            <Dropdown.Item className="menuItem" href={ `${API_URL}/files/file/download/${i._id}` }>
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

                                                            <Dropdown.Item className='menuItem' onClick={dropdownItemShare}>
                                                                Share
                                                            </Dropdown.Item>
                                                            {/* <Dropdown.Item className='menuItem' onClick="" >
                                                                Move
                                                            </Dropdown.Item> */}

                                                            {/* {value === "false"}: */}
                                                            <Dropdown.Item className=" menuItem" onClick={() => dropdownFileItemStarred(i._id)}>
                                                                Add to Starred
                                                            </Dropdown.Item>
                                                             ?
                                                             <Dropdown.Item className=" menuItem" onClick={() => dropdownFileItemStarred(i._id)}>
                                                                Remove From Starred
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

                    


                    </Row>
                    </Container>
                    </div>
        </>
    )
}