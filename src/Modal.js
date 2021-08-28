import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import blond from './asset/blondLady.jpeg';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  top: {
      display: 'flex',
        gap: '10px',
        alignItems: 'center'
        
  },
  intouch: {
    display: 'flex',
    width: '100%',
    alignItems: 'end',
      gap: '35px',
      justifyContent: 'space-evenly',
      marginTop: "25px"
},
  paper: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '80vw',
    height: '380px'
  },
  button: {
    height:'50px',
    fontSize:'15px',
    fontWeight:'900'
  }
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
      modal={() => handleClose()}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <div className={classes.top}>
              <img src={blond} width='75px' height='75px' style={{borderRadius:'50%'}} alt="" />
              <h2 style={{fontSize:'35px'}}>Blond Lady</h2>
              
          </div>
          <div className={classes.intouch}>
              <Button className={classes.button}  style={{ backgroundColor:'#ff5722',color:'#f5f5f5'}} variant="contained">Hire me</Button>
              <Button className={classes.button}  style={{ color:'#ff5722'}} variant="contained">Contact</Button>
        </div>
        <hr style={{color:'black',borderWidth:'1px',width:'100%'}} />
        <p>No pictures here</p>
          </div>
         
        </Fade>
      </Modal>
    </div>
  );
}