import Recat from 'react';
import  ReactDOM  from 'react-dom';
import './Sidenavoptions.css';
import {Star} from 'react-bootstrap-icons';
import {Trash} from 'react-bootstrap-icons';
import {ClockHistory} from 'react-bootstrap-icons';
import {Tablet} from 'react-bootstrap-icons';
import {Grid3x3GapFill} from 'react-bootstrap-icons';
import {QuestionCircle} from 'react-bootstrap-icons';
import {ShareFill} from 'react-bootstrap-icons';
import {Button} from 'react-bootstrap';
import UploadButton from './UploadButton';

function Sidenavoptions(props)
{
    console.log("In side " + props.user.userId);
    console.log("In side " + props.user.Path);
    console.log("In side " + props.user.parentFolderId);

    return(
      <div className='sidenav'>
          <div className='sidenav__options '>
          <Grid3x3GapFill/>
          <span className='buttonSide'>
              Dashboard
          </span>
          </div>
          <div className='sidenav__options'>
          <Star/>
          <span className='buttonSide'>
              Starred
          </span>
          </div >
          <div className='sidenav__options'>
          <ShareFill/>
          <span className='buttonSide'>
              Shared
          </span>
          </div >
          <div className='sidenav__options'>
              <QuestionCircle/>
          <span className='buttonSide'>
              Help
          </span>
          </div>
          <div id='buttonSide' style={{marginTop:"240px",marginLeft:"20px"}}>
          <UploadButton  user={props} />
          </div>
      </div>
    )

    
}
export default Sidenavoptions;