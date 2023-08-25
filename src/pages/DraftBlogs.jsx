import React from "react";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useDataCall from "../hooks/useDataCall";
import { useNavigate } from "react-router";
import DraftBlogModal from "../components/DraftBlogModal";

const DraftBlogs = ({draftArr}) => {
  const {postData}=useDataCall()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box container  height={"100%"} >
      <Grid container >
        {draftArr.map((item) => (
          <Grid
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
                <Button onClick={()=>postData("blogs","", item)}>Publish</Button>
                <Button onClick={handleOpen}>Edit</Button>

<DraftBlogModal handleOpen={handleOpen} handleClose={handleClose} open={open}/>

              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DraftBlogs;
