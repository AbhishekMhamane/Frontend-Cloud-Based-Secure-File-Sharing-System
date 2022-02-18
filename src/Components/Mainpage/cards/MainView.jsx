import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import UploadButton from '../Sidenav/UploadButton.jsx';
import Cards from './Cards.jsx';
import Header1 from '../Navbar/Header1.jsx';
import Sidenavoptions from '../Sidenav/Sidenavoptions.jsx';


function MainView(){
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col style={{border: '1px solid black'}}>
                    <Header1></Header1>
                    
                    </Col>
                </Row>
                <Row >
                    <Col xs={2}>
                        <UploadButton></UploadButton>
                        <Sidenavoptions></Sidenavoptions>   
                    </Col>
                    <Col xs={10} >
                    <Cards></Cards></Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainView;