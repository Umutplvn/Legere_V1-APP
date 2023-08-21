import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { btnLead } from "../styles/globalStyles";

const BlogNews = () => {
  return (
    <Grid container sx={{backgroundColor:"#BCDEE6"}}>
      <Grid item xs={10} sm={6} md={4} sx={{margin:"auto"}} >
        <Paper elevation={3} variant="outlined" sx={{minWidth:"320px",  color:"black" ,"&:hover":{backgroundColor:"#d0e8cf"}, transition:"0.3s", backgroundColor:"white"
    }}
        
        
        >
          <Box padding={"0.5rem"} textAlign={"center"} >
            <img
              src="https://play-lh.googleusercontent.com/mLvvgUXJVZeu-GbqWZfr8ug74V7d8Od9yU2AOvUUptiki9wIH-BJHataFTJI_J0TlQ"
              width={"150px"}
              style={{borderRadius:"1rem"}}
            />
          </Box>

          <Typography component={"h4"} variant="h5" fontWeight={"600"} sx={{ textAlign: "center"}}>
            React
          </Typography>

          {/* Content Text */}
          <Box  padding={"0.5rem"} > 
            <Typography height={"80px"} overflow={"scroll"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, lorem
            </Typography>
            <Typography>29/04/23 15.50</Typography>
          </Box>
          {/* Content User Info */}
          <Box display={"flex"} alignItems={"center"} padding={"0.5rem"} gap="10px">
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
              <Typography >User Name</Typography>
          </Box>
         
         
          {/* Content Buttons and Values Info/ Read More */}
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Box display={"flex"} padding={"0.5rem"} gap={"0.5rem"}  >
              <FavoriteIcon sx={{cursor:"pointer"}}/>
              <ChatBubbleIcon  sx={{cursor:"pointer"}}/>
              <RemoveRedEyeIcon  sx={{cursor:"pointer"}}/>
            </Box>
            <Box>
              <Button  sx={btnLead}>Read More</Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BlogNews;
