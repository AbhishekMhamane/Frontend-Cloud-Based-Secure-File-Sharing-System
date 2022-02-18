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
          <button className='buttonSide'>
              My Storage
          </button>
          </div>
          <div className='sidenav__options'>
          <ClockHistory/>
          <button className='buttonSide'>
              Recent
          </button>
          </div >
          <div className='sidenav__options'>
          <Star/>
          <button className='buttonSide'>
              Starred
          </button>
          </div >
          <div className='sidenav__options'>
              <Trash/>
          <button className='buttonSide'>
              Trash
          </button>
          </div>
      </div>
    )

    
}
export default Sidenavoptions;