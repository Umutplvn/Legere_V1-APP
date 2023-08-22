import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Avatar, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { btnLead } from "../styles/globalStyles";
import CommentBlock from '../components/CommentBlock';

const DetailPage = () => {
    const {blogs}=useSelector((state)=>state?.blogs)
    const {id} =useParams()
    const navigate=useNavigate()
    const veri= blogs.filter((data)=>data.id==id)
    const [comment, setComment]=useState(false)
 
console.log("comment",comment);
  return (
    <>
  
{veri.map((item)=>  


<Paper
key={item.id}
elevation={3}
sx={{
  maxWidth:"600px",
  m:"3rem auto",
  color: "black",
  "&:hover": { backgroundColor: "#eefaee" },
  transition: "0.3s",
  backgroundColor: "white",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between"

}}
>
<Box height={"200px"} padding={"0.5rem"} textAlign={"center"}>
  <img
    src={item.image}
    width={"150px"}
    style={{ borderRadius: "1rem" }}
  />
</Box>

<Typography
  component={"h4"}
  variant="h5"
  fontWeight={"600"}
  sx={{ textAlign: "center" }}
>
  {item.title}
</Typography>

{/* Content Text */}
<Box padding={"0.5rem"}>
  <Typography height={"80px"} overflow={"scroll"}>
    {item.content}
  </Typography>
  <Typography sx={{mt:"15px"}}>{(item.publish_date)}</Typography>
</Box>
{/* Content User Info */}
<Box
  display={"flex"}
  alignItems={"center"}
  padding={"0.5rem"}
  gap="10px"
>
  <Avatar>
    <AccountCircleIcon />
  </Avatar>
  <Typography>{item.author}</Typography>
</Box>

{/* Content Buttons and Values Info/ Read More */}
<Box
  display={"flex"}
  justifyContent={"space-between"}
  alignItems={"center"}
>
  <Box display={"flex"} padding={"0.5rem"} gap={"0.5rem"}>
    <Box display={"flex"}>
      <FavoriteIcon sx={{ cursor: "pointer" }} />
      <Typography>{item.likes}</Typography>
    </Box>
    <Box display={"flex"} onClick={()=> setComment(!comment)}>
      <ChatBubbleIcon  sx={{ cursor: "pointer" }} />
      <Typography >{item.comment_count}</Typography>
    </Box>
    <Box display={"flex"}>
      <RemoveRedEyeIcon sx={{ cursor: "pointer" }} />
      <Typography>{item.post_views}</Typography>
    </Box>
  </Box>
</Box>

</Paper>     

)}

{comment ? <CommentBlock/> : <Typography>"asadasd"</Typography>}
    
</>
       

)
}
export default DetailPage