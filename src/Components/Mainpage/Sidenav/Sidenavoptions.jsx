import {useRef} from 'react';
import ReactDOM from 'react-dom';
import './Sidenavoptions.css';
import { Star } from 'react-bootstrap-icons';
import { Trash } from 'react-bootstrap-icons';
import { ClockHistory } from 'react-bootstrap-icons';
import { Tablet } from 'react-bootstrap-icons';
import { Grid3x3GapFill } from 'react-bootstrap-icons';
import { QuestionCircle } from 'react-bootstrap-icons';
import { ShareFill } from 'react-bootstrap-icons';
import { Gear } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import UploadButton from './UploadButton';

import Logo from './Clore_Logo.png';
import {Image} from 'react-bootstrap';

function Sidenavoptions(props) {
    console.log("In side " + props.user.userId);
    console.log("In side " + props.user.Path);
    console.log("In side " + props.user.parentFolderId);

    const fileRef = useRef();
  const fileRef1 = useRef();

  const handleChange = (e) => {
    const files = e.target.files;
    console.log(files);
    console.log("In upload " + props.user.userId);
    console.log("In upload " + props.user.Path);
    console.log("In upload " + props.user.parentFolderId);

    for (let i = 0; i < files.length; i++) {

        let fdata = new FormData();

        fdata.append('userid', props.user.userId);
        fdata.append('userpath', props.user.Path);
        fdata.append('parentfolderid', props.user.parentFolderId);
        fdata.append('files', files[i]);
        axios.post("http://localhost:3000/files", fdata)
            .then(response => console.log(response.data)).catch(err => console.log(err));
        // console.log(data.file[i]);
    }
    
    // const fdata = new FormData();

    // fdata.append('userid', props.user.userId);
    // fdata.append('userpath', props.user.Path);
    // fdata.append('parentfolderid', props.user.parentFolderId);

    // for (let i = 0; i < files.length; i++) {
    //   fdata.append('files', files[i]);
    //   // console.log(data.file[i]);
    // }
    // axios.post("http://localhost:3000/files", fdata)
    //   .then(response => console.log(response.data)).catch(err => console.log(err));


  };


   const handleCreateFolder = () =>{
       
    alert("In upload " + props.user.userId);
    alert("In upload " + props.user.Path);
    alert("In upload " + props.user.parentFolderId);

    axios.post('http://localhost:3000/folders/',{
        userId : props.user.userId,
        folderName : "while",
        folderPath : props.user.Path,
        parentFolderId : props.user.parentFolderId
    });
    
   }

    const myFunction = () => {
        var x = document.getElementById("button");
        if (x.style.display === "block") {
          x.style.display = "none";
        }
        else {
          x.style.display = "block";
        }
    
    
      }

    return (
        <div>
             
                        
        <div className='sidenav'>
           
                        <Container fluid >
                    <div className='header__logo'>
                        <Image className='rounded-circle' src={Logo}></Image>
                        <span style={{color:"#ff9f02"}}><b><i>C</i></b></span>
                        <span style={{color:"#ff9f02",marginLeft:"0px"}}><b><i>L</i></b></span>
                        <span style={{color:"white",marginLeft:"0px"}}><b><i>O</i></b></span>
                        <span style={{color:"#ff9f02",marginLeft:"0px"}}><b><i>R</i></b></span>
                        <span style={{color:"#ff9f02",marginLeft:"0px"}}><b><i>E</i></b></span>

                    </div>

                </Container>
            <div className='sidenav__options' >
                <Grid3x3GapFill />
                <span>
                    Dashboard

                </span>

            </div>
            <div className='sidenav__options'>
                <Star />
                <span>
                    Starred
                </span>
            </div >
            <div className='sidenav__options'>
                <ShareFill />
                <span >
                    Shared
                </span>
            </div >
            <div className='sidenav__options'>
                <Gear />
                <span >
                    Setting
                </span>
            </div >
            <div className='sidenav__options'>
                <PersonCircle />
                <span >
                    User
                </span>
            </div >
            <div className='sidenav__options'>
                <QuestionCircle />
                <span >
                    Help
                </span>
            </div>
            </div>
                <div>
                    <Dropdown >
                        <Dropdown.Toggle variant='warning'  style={{marginTop:"-40px",backgroundColor:" #ff9f02",color:"white"}} >
                            Upload
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{marginBottom:"10px",marginLeft:"-30px",backgroundColor:"transparent"}}>
                            <Dropdown.Item onClick={() => fileRef1.current.click()} className="dropHover" >
                                File Upload
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => fileRef.current.click()} className="dropHover">
                                Upload Folder
                            </Dropdown.Item>
                            <Dropdown.Item className="dropHover" onClick={()=>handleCreateFolder()}>
                                Create New Folder
                            </Dropdown.Item>
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
    )


}
export default Sidenavoptions;