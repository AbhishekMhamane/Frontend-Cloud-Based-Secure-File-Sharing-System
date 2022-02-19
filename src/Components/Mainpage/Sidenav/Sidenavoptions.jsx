import Recat from 'react';
import  ReactDOM  from 'react-dom';
import './Sidenavoptions.css';
import {Star} from 'react-bootstrap-icons';
import {Trash} from 'react-bootstrap-icons';
import {ClockHistory} from 'react-bootstrap-icons';
import {Tablet} from 'react-bootstrap-icons';

function Sidenavoptions()
{
    return(
      <div className='sidenav'>
          <div className='sidenav__options sidenav__options-active'>
          <Tablet/>
          <span className='buttonSide'>
              My Storage
          </span>
          </div>
          <div className='sidenav__options'>
          <ClockHistory/>
          <span className='buttonSide'>
              Recent
          </span>
          </div >
          <div className='sidenav__options'>
          <Star/>
          <span className='buttonSide'>
              Starred
          </span>
          </div >
          <div className='sidenav__options'>
              <Trash/>
          <span className='buttonSide'>
              Trash
          </span>
          </div>
      </div>
    )

    
}
export default Sidenavoptions;