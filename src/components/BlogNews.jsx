import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { btnLead } from "../styles/globalStyles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const BlogNews = () => {
  const {blogs}=useSelector((state)=>state?.blogs)
  const navigate = useNavigate()

  

  return (
    <Box container sx={{ backgroundColor: "#BCDEE6", height:"100vh"}}>

 
    <Grid container justifyContent="center" m={0}>
    {blogs.map((item)=> 
    
<Grid key={item.id} item xs={12} sm={4} md={3} sx={{ minWidth: "320px", height:"450px", margin:"2rem 3rem" }}>

        <Paper
          elevation={3}
          sx={{
            // maxWidth:"600px",
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
              <Box display={"flex"}>
                <ChatBubbleIcon sx={{ cursor: "pointer" }} />
                <Typography>{item.comment_count}</Typography>
              </Box>
              <Box display={"flex"}>
                <RemoveRedEyeIcon sx={{ cursor: "pointer" }} />
                <Typography>{item.post_views}</Typography>
              </Box>
            </Box>
            <Box>
              <Button sx={btnLead} onClick={()=>navigate(`/detail/${item.id}`)}>Read More</Button>
            </Box>
          </Box>
        </Paper>

        
      </Grid>
    )}


   
      
    </Grid>
    </Box>
  );
};

export default BlogNews;
