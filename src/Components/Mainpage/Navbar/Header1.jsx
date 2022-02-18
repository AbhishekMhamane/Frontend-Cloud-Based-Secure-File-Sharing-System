import React from 'react';
import ReactDOM from 'react-dom';
import './Header1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { Search } from 'react-bootstrap-icons';
import { List } from 'react-bootstrap-icons';
import { QuestionCircle } from 'react-bootstrap-icons';
import { Gear } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';

function Header1() {
    return (
        <div className='header'>


            <div className='header__logo'>
                <img src='https://logodownload.org/wp-content/uploads/2020/04/google-drive-logo-0-1.png'></img>
                <span>CFS</span>

            </div>



            <div className='header__search'>
                <Search></Search>
                <input type="text" placeholder='Search In CFS' />
                <List></List>

            </div>

            <div className='header__options'>
                <span><QuestionCircle></QuestionCircle></span>
                <span><Gear></Gear></span>
                <span><PersonCircle></PersonCircle></span>
                
                

            </div>

        </div >
    )
}

export default Header1;