import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import App from './App.jsx';
import Imagepreview from './Imagepreview.jsx';

function App2(){
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col style={{border: '1px solid black'}}>
                    <center>Navbar</center>
                    
                    </Col>
                </Row>
                <Row >
                    <Col xs={2} style={{borderRight:"1px solid black" }}>
                        <App></App>
                    </Col>
                    <Col xs={10} >
                    <Imagepreview></Imagepreview></Col>
                </Row>
            </Container>
        </div>
    )
}

export default App2;