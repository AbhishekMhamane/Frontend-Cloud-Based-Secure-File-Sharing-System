import React from 'react'
import classes from "./Homepage.module.css";
import Header from './Header/Header';

import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

import { useAuth0 } from "@auth0/auth0-react";


function Homepage() {

    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div >

            <Container fluid >
                <Row>
                    <div className={classes.con}>
                        <Header />

                        <Row style={{ paddingLeft: '5rem', paddingRight: '5rem' }}>
                            <Col xl={4} lg={4} >

                            </Col>


                            <Col xl={8} lg={8}  >
                                <p className={classes.mainhead}>Your thing that makes you,you.<br />So, keep going.</p>

                                <p className={classes.mainhead2}>The world is watching. Your thing can be their thing too!<br />Go. Do your thing!!</p>


                                <button
                                    onClick={() => loginWithRedirect()}
                                    style={{ outline: 'none' }} class="btn btn-primary" className={classes.getbtn}>
                                        <p style={{ color: "#FFFFFF", fontSize: "1.2rem", outline: 'none' }}>GET STARTED</p></button>


                            </Col>

                        </Row>
                    </div>

                </Row>

            </Container>


        </div>
    )
}

export default Homepage
