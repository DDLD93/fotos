import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import blond from './asset/blondLady.jpeg';
import Modal from './Modal'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';


const useStyles = makeStyles({
  root: {
    width: '350px',
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    padding:'3px',
    backgroundColor:'rgba(0, 0, 0, 0.1)',
    color: "white"

  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
    <Modal/>
    <Card className={classes.root}>
     <img style={{borderRadius:'5px'}} src={blond} height='147' width='147' alt="" />
      <div className="userinfo">
        <div style={{width:'100%', paddingLeft:'15px'}}>
              <p style={{margin:'0',fontSize: 'x-large'}} className="username">Umar Adamu</p>
        </div>
          <div className="reachout">
              <button id='portfolio' className="buttons">Portfolio</button>
              <button id='follow' className="buttons"><PersonAddIcon color="secondary"/></button>
          </div>
          <div className="avialabity"><LocationOnTwoToneIcon color="primary"/>Kaduna</div>
          <div className="rating">********</div>
      </div>
    </Card>
    </>
  );
}

