import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { FolderFill, FileEarmarkTextFill, Search } from "react-bootstrap-icons";

import logo from './Sidenav/Clore_Logo.png';

const Publiccard = ({file}) => {

  const API_URL = "http://localhost:3000";


  return (
    <div>
   <Card sx={{ maxWidth: 190 }} style={{marginTop:'10px',marginLeft:'10px'}}
    onDoubleClick={() => {
      window.open(`${API_URL}/files/file/${file._id}`);
    }} >
      <FileEarmarkTextFill style={{
                              color: "rgb(54, 152, 243)",
                              fontSize: "40px",
                              marginTop: "20px",
                            }}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {file.fileName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Owner : {file.userId}
        </Typography>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"  href={`${API_URL}/files/file/download/${file._id}`} >Download</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Publiccard