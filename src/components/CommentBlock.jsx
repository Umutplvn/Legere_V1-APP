import { Avatar, Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import EmojiPicker from 'emoji-picker-react';
import { emojiStyle } from "../styles/globalStyles";



const CommentBlock = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [comment, setComment]=useState({})

  const handleEmoji=(e)=>{
    console.log(e);
  }

  return (
    <Box display={"flex"} alignItems={"center"} gap={2} mt={3} >
      <Box>
        <Avatar sx={{ margin: "0.5rem" }}>A</Avatar>
      </Box>

      <Box width={"100%"}>

{/* Modal */}
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > 
      <Box sx={emojiStyle}>
       <EmojiPicker onEmojiClick={(e)=>handleEmoji(e.emoji)}/>
      </Box>
      </Modal>

     {/* Modal */}

        <TextField variant="standard" sx={{ width: "98%" }}  value={comment}>  </TextField>
          

        <Box display={"flex"} justifyContent={"space-between"} alignItems="center">
          <Button onClick={handleOpen} >😂 😢</Button>
          <Box display={"flex"}>
            <Button>Iptal</Button>
            <Button>Yorum</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentBlock;
