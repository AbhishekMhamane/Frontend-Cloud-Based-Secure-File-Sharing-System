import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Button  } from 'react-bootstrap';
import Select from 'react-select';
import './App.css';
import { Height } from '@material-ui/icons';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import App2 from './App2.jsx';
import App3 from './App3.jsx';

function Imagepreview (){

  return(


  <div>
 <Card style={{width:"7rem",height:"7rem", borderRadius:"10px",boxShadow:"2px 2px 2px aqua"}} >
  <Card.Body>
    
    <Card.Text>
      
    </Card.Text>
  </Card.Body>
  <Card.Footer style={{color:"skyBlue",height:"40px"}}>
   
    <Card.Text style={{marginLeft:"-5px"}}>
      FileName
    </Card.Text>
    <App3/>
    
  </Card.Footer>
</Card> 


</div>
)
}
export default Imagepreview; 

  