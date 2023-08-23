import { Box, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Avatar, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CommentBlock from "../components/CommentBlock";
import useDataCall from "../hooks/useDataCall";
import { detailPageStyle, homeStyle } from "../styles/globalStyles";

const DetailPage = () => {
  const { blogs } = useSelector((state) => state?.blogs);
  const { id } = useParams();
  const navigate = useNavigate();
  const veri = blogs.filter((data) => data.id == id);
  const [comment, setComment] = useState(false);
  const { getDataLikes, getData } = useDataCall();

  const handleLikes = (id) => {
    getDataLikes(`likes/${id}/`);
    getData("blogs");
  };

  return (


    <Grid container 
   sx={detailPageStyle}
    > 
<Grid item xs={10} sm={10} md={9}  lg={7} xl={5} m={"auto"}>
<Box
     
    >
      <Box mt={"40px"}>
        {veri.map((item) => (
          <Paper
            key={item.id}
            elevation={3}
            sx={{
              maxWidth: "600px",
              m: "auto",
              color: "black",
              backgroundColor: "#eef8fa",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box height={"200px"} padding={"0.5rem"} textAlign={"center"}>
              <img
                src={item.image}
                width={"250px"}
                style={{
                  borderRadius: "1rem",
                  aspectRatio: "4/3",
                  objectFit: "contain",
                }}
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
              <Typography m={"2rem 0"}>{item.content}</Typography>
              <Typography sx={{ mt: "15px" }}>{item.publish_date}</Typography>
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
                  {item.likes >= 1 ? (
                    <FavoriteIcon
                      sx={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleLikes(item.id)}
                    />
                  ) : (
                    <FavoriteIcon
                      sx={{ cursor: "pointer", color: "black" }}
                      onClick={() => handleLikes(item.id)}
                    />
                  )}

                  <Typography>{item.likes}</Typography>
                </Box>
                <Box display={"flex"}>
                  <RemoveRedEyeIcon sx={{ cursor: "pointer" }} />
                  <Typography>{item.post_views}</Typography>
                </Box>
                <Box display={"flex"}>
                  <ChatBubbleIcon
                    onClick={() => setComment(!comment)}
                    sx={{ cursor: "pointer" }}
                  />
                  <Typography>{item.comment_count}</Typography>
                </Box>
              </Box>
            </Box>

            {comment && <CommentBlock />}
          </Paper>
        ))}
      </Box>
    </Box>
</Grid>

    </Grid>


   
  );
};
export default DetailPage;
