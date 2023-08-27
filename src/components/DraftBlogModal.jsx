import Modal from "@mui/material/Modal";
import { Button, Grid, Input, Paper, TextField } from "@mui/material";
import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import useDataCall from "../hooks/useDataCall";
import { btnGreen, btnRed } from "../styles/globalStyles";

const DraftBlogModal = ({
  open,
  handleClose,
  newData,
  setNewData,
  index,
  info,
  setInfo,
}) => {
  const { categories } = useSelector((state) => state.blogs);
  const { postData, getData } = useDataCall();
  useEffect(() => {
    getData("categories");
  }, []);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    info.status = "p";
    postData("blogs", "", info);
    const erase = newData[index - 1];
    console.log("erase", erase);
    if (erase == undefined) {
      let filtered = "";
      console.log("filtered", filtered);
      setNewData([]);
      localStorage.setItem("newArr", JSON.stringify(filtered));
    } else {
      let filtered = newData.filter((item) => item !== erase);
      console.log("filtered", filtered);
      setNewData(filtered);
      localStorage.setItem("newArr", JSON.stringify(filtered));
    }
    handleClose();
    getData("blogs");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container mt={4}>
          <Grid item xs={11} md={6} m={"auto"}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid, black",
                borderRadius: "1rem",
              }}
            >
              <FormControl>
                <Input
                  onChange={handleChange}
                  placeholder="Title"
                  sx={{ padding: "1rem", borderRadius: "1rem" }}
                  name="title"
                  value={info?.title}
                />
                <TextField
                  onChange={handleChange}
                  placeholder="Content"
                  value={info?.content}
                  sx={{
                    height: "200px",
                    borderRadius: "1rem",
                    "& fieldset": { border: "none" },
                  }}
                  multiline
                  name="content"
                />
                <Input
                  onChange={handleChange}
                  type="text"
                  name="image"
                  variant="standart"
                  placeholder="Image URL"
                  value={info?.image}
                  sx={{
                    
                    padding: "1rem",
                    borderTop: "solid #aaaaaa",
                  }}
                />

                <FormControl fullWidth >
                 
                  <Select
                    labelId="category"
                    id="category"
                    onChange={handleChange}
                    value={info?.category}
                    name="category"
                  >
                    {categories?.map((item) => (
                      <MenuItem value={Number(item?.id)}>{item?.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button sx={btnRed} onClick={handleClose}>Cancel</Button>
                <Button sx={btnGreen} onClick={handleSubmit}>Public</Button>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default DraftBlogModal;
