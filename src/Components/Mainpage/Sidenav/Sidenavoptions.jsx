import React,{ useRef, useEffect,useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./Sidenavoptions.css";
import { Star } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";
import { ClockHistory } from "react-bootstrap-icons";
import { Tablet } from "react-bootstrap-icons";
import { Grid3x3GapFill } from "react-bootstrap-icons";
import { QuestionCircle } from "react-bootstrap-icons";
import { ShareFill } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Dropdown ,Modal} from "react-bootstrap";
import UploadButton from "./UploadButton";

import Logo from "./Clore_Logo.png";
import { Image } from "react-bootstrap";

import {fetchFiles} from '../../../store/filesActions';
import {useDispatch,useSelector} from 'react-redux';


function Sidenavoptions(props) {

  const user = useSelector( (state)=> state.user.user);

  const API_URL = "http://localhost:3000";
  const dispatch = useDispatch();

  console.log("In side " +user.userId);
  console.log("In side " + user.userPath);
  console.log("In side " +user.parentFolderId);

  const fileRef = useRef();
  const fileRef1 = useRef();

  const handleChange = (e) => {
    const files = e.target.files;
    console.log(files);
    console.log("In upload " + user.userId);
    console.log("In upload " +user.userPath);
    console.log("In upload " +user.parentFolderId);

    for (let i = 0; i < files.length; i++) {
      let fdata = new FormData();

      fdata.append("userid", user.userId);
      fdata.append("userpath", user.userPath);
      fdata.append("parentfolderid", user.parentFolderId);
      fdata.append("files", files[i]);
      axios
        .post(`${API_URL}/files`, fdata)
        .then((response) => {
          console.log(response.data);
          dispatch(fetchFiles(user.userId));
        })
        .catch((err) => console.log(err));
    }

  };

  const [showModal, setShow] = useState(false);
  let textInput = React.createRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange1 = (e) => {
    console.log(textInput.current.value);
    setShow(false);
  };


  // const handleCreateFolder = () => {
  //   alert("In foldercreate " + user.userId);
  //   alert("In foldercreate " + user.userPath);
  //   alert("In foldercreate " + user.parentFolderId);

  //   axios.post(`${API_URL}/folders`, {
  //     userId: user.userId,
  //     folderName: "tst",
  //     folderPath: user.userPath,
  //     parentFolderId: user.parentFolderId,
  //   });
  // };

  return (
    <>
      <div className="sidenav">
        <Container fluid>
          <div className="header__logo">
            <Image className="rounded-circle" src={Logo}></Image>
            <span style={{ color: "#ff9f02" }}>
              <b>
                <i>C</i>
              </b>
            </span>
            <span style={{ color: "#ff9f02", marginLeft: "0px" }}>
              <b>
                <i>L</i>
              </b>
            </span>
            <span style={{ color: "white", marginLeft: "0px" }}>
              <b>
                <i>O</i>
              </b>
            </span>
            <span style={{ color: "#ff9f02", marginLeft: "0px" }}>
              <b>
                <i>R</i>
              </b>
            </span>
            <span style={{ color: "#ff9f02", marginLeft: "0px" }}>
              <b>
                <i>E</i>
              </b>
            </span>
          </div>
        </Container>
        <div className="sidenav__options">
          <Grid3x3GapFill />
          <Link
            to={{ pathname: '/mydash' }} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <span>Dashboard</span>
          </Link>
        </div>
        <div className="sidenav__options">
          <Grid3x3GapFill />
          <Link
            to={{ pathname: '/public' }} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <span>Public</span>
          </Link>
        </div>
        <div className="sidenav__options">
          <Star />
          <Link
            to={{ pathname: `/starred` }} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <span> 
          Starred</span> </Link>
          
        </div>
        <div className="sidenav__options">
          <ShareFill />
        
            <span>Shared</span>
          
        </div>
        <div className="sidenav__options">
          <Gear />
          <span>Setting</span>
        </div>
        <div className="sidenav__options">
          <PersonCircle />
          <Link
            to={{ pathname: `/account` }} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <span>User Account</span>
          </Link>
        </div>
        <div className="sidenav__options">
          <QuestionCircle />
          <span>Help</span>
        </div>
      
      <div>
        <Dropdown>
          <Dropdown.Toggle
            variant="warning"
            style={{
              marginTop:"200px",
              backgroundColor: " #ff9f02",
              color: "white",
            }}
          >
            Upload
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              marginBottom: "10px",
              marginLeft:"-5px",
              backgroundColor: "transparent",
            }}
          >
            <Dropdown.Item
              onClick={() => fileRef1.current.click()}
              className="dropHover"
            >
              File Upload
            </Dropdown.Item>
            {/* <Dropdown.Item
              onClick={() => fileRef.current.click()}
              className="dropHover"
            >
              Upload Folder
            </Dropdown.Item> */}
            <Dropdown.Item
              className="dropHover"
              onClick={() => handleShow()}
            >
              Create New Folder
            </Dropdown.Item>

            <Modal className="modal" show={showModal} onHide={handleClose}>
                                <div className="modalHeader">
                                <Modal.Header >
                                  <Modal.Title>Create New Folder</Modal.Title>
                                </Modal.Header>
                                </div>
                                <Modal.Body>
                                  <label> New Folder Name: </label>
                                  <input  ref={textInput} type={"text"}></input>
                                </Modal.Body>
                                <div className="modalHeader">
                                <Modal.Footer>
                                  <Button
                                    variant="warning"
                                    onClick={handleClose}
                                  >
                                    Close
                                  </Button>
                                  <Button
                                    variant="warning"
                                    onClick={handleChange1}
                                  >
                                    Save Changes
                                  </Button>
                                </Modal.Footer>
                                </div>
                              </Modal>
          </Dropdown.Menu>
        </Dropdown>

        <div>
          <input
            id="hi"
            ref={fileRef}
            onChange={handleChange}
            multiple={true}
            //  directory={fileRef.directory}
            webkitdirectory=""
            type="file"
            hidden
          />
        </div>
        
        <div>
          <input
            id="hi"
            ref={fileRef1}
            onChange={handleChange}
            multiple={true}
            //  directory={fileRef.directory}
            //webkitdirectory=""
            type="file"
            hidden
          />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidenavoptions;
