import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { btnLead } from "../styles/globalStyles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useDataCall from "../hooks/useDataCall";
import { useEffect } from "react";

const BlogNews = () => {
  useEffect(() => {
    getData("blogs");
  }, [])
  const { blogs } = useSelector((state) => state?.blogs);
  const navigate = useNavigate();
  const { getDataLikes } = useDataCall();
  const { getData } = useDataCall();

  const handleLikes = (id) => {
    getDataLikes(`likes/${id}/`);
    getData("blogs");
  };

 
  

  return (
    <Box container  height={"100%"} >
      <Grid container >
        {blogs.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12}
            sm={4}
            md={3}
            sx={{ minWidth: "320px", height: "500px", padding: "1rem", m:"auto" }}
          >
            <Paper
              elevation={3}
              sx={{
                color: "black",
                "&:hover": { backgroundColor: "#eef8fa" },
                transition: "0.3s",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box height={"200px"} padding={"0.5rem"} textAlign={"center"}>
                <img
                alt={item.title}
                  src={item.image}
                  height={"180px"}
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
                <Typography
                  height={"80px"}
                  textOverflow="ellipsis"
                  sx={{ overflow: "hidden", whiteSpace: "pre" }}
                >
                  {item.content}
                </Typography>
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
                    <ChatBubbleIcon sx={{ cursor: "pointer" }} />
                    <Typography>{item.comment_count}</Typography>
                  </Box>
                  <Box display={"flex"}>
                    <RemoveRedEyeIcon sx={{ cursor: "pointer" }} />
                    <Typography>{item.post_views}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    sx={btnLead}
                    onClick={() => navigate(`/detail/${item.id}`)}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogNews;
