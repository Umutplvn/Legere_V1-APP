import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useDataCall from '../hooks/useDataCall';
import { emojiStyle } from '../styles/globalStyles';
import { Navigate, useNavigate } from 'react-router';


const DeleteModal = ({open, handleClose, id}) => {
    const navigate = useNavigate()


    const { deleteData } = useDataCall();

    const handleDelete = (id) =>{
        deleteData(id)
        handleClose()
        navigate("/")
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={emojiStyle} >
          <Typography mb={2} id="modal-modal-title" variant="h6" component="h2">
            Do you really want to delete this blog?
          </Typography>
          <Box display={"flex"} justifyContent={"center"} gap={2}>

         <Button onClick={()=>handleDelete(id)} sx={{backgroundColor:"green", color:"white", "&:hover":{backgroundColor:"success.dark"}}}>YES</Button>
         <Button onClick={handleClose} sx={{backgroundColor:"#e53935", color:"white", "&:hover":{backgroundColor:"#b71c1c"}}}>NO</Button>
        
          </Box>
        </Box>
      </Modal>
    </div>
  );
}


export default DeleteModal