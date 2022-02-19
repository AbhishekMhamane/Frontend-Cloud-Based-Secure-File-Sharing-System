import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

import CardButton from './CardButton.jsx';
import './Cards.css';
function Cards (props){

  return(

  <div>
<<<<<<< HEAD
 <Card style={{width:"7rem",height:"8rem", borderRadius:"10px",boxShadow:"0.5px 0.5px 0.5px "}} >
=======
 <Card style={{width:"7rem",height:"7rem", marginRight:'-0.2rem',
 borderRadius:"10px",boxShadow:"0.5px 0.5px 0.5px "}} >
>>>>>>> refs/remotes/origin/main
  <Card.Body>
    
    <Card.Text>
      
    </Card.Text>
  </Card.Body>
  <Card.Footer style={{color:"skyBlue",height:"40px"}}>
   
    <Card.Text style={{marginLeft:"-5px" ,color:"black"}}>
     {props.data.fileName}
    </Card.Text>
    <CardButton/>
    
  </Card.Footer>
</Card> 


</div>
)
}
export default Cards; 

  