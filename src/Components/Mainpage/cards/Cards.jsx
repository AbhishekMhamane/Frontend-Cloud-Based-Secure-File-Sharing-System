import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import CardButton from './CardButton.jsx';
import './Cards.css';

function Cards (){

  return(


  <div>
 <Card style={{width:"7rem",height:"7rem", borderRadius:"10px",boxShadow:"0.5px 0.5px 0.5px "}} >
  <Card.Body>
    
    <Card.Text>
      
    </Card.Text>
  </Card.Body>
  <Card.Footer style={{color:"skyBlue",height:"40px"}}>
   
    <Card.Text style={{marginLeft:"-5px" ,color:"black"}}>
      FileName
    </Card.Text>
    <CardButton/>
    
  </Card.Footer>
</Card> 


</div>
)
}
export default Cards; 

  