import {React ,useEffect,useState} from 'react';
import {Card} from 'react-bootstrap';
import './SearchView.css';


function SearchView(props)
{
    return(
        <>
        <div>
           <Card style={{height:"400px",width:"790px",marginTop:"5px"}}>
             <Card.Body>
                 <Card.Text>{props.name}</Card.Text>
             </Card.Body>
            </Card> 
        </div>
        </>
    )
}

export default SearchView;