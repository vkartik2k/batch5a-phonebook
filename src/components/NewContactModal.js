import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, changeMobile, changeName, new_contact } from '../actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

export default function NewContactModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = useSelector(state => state.newContact)
  const dispatch = useDispatch()

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClick={handleOpen}
      >
      </SpeedDial>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h2>New Contact</h2>
            <TextField id="outlined-basic" label="Full Name" variant="outlined" value={data.name} onChange={e => dispatch(changeName(e.target.value))}/>
            <br/><br/>
            <TextField id="outlined-basic" label="Mobile No." variant="outlined" value={data.mobile}  onChange={e => dispatch(changeMobile(e.target.value))}/>
            <br/><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={data.email}  onChange={e => dispatch(changeEmail(e.target.value))}/>
            <br/><br/>
            <br/>
            <Button 
                variant="contained"
                onClick={() => {
                    dispatch(new_contact(data))
                    handleClose()
                }}
            >Save Contact</Button>
        </Box>
      </Modal>
    </div>
  );
}
