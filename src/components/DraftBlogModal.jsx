import Modal from '@mui/material/Modal';
import { Button, Grid, Input, Paper, TextField } from "@mui/material";
import React  from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from 'react-redux';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DraftBlogModal= ({open, handleClose, draftArr})=> {

    const { categories } = useSelector((state) => state.blogs);
    const selectedCat= categories.filter((item)=>item.id== draftArr[0].category)

    const handleChange=()=>{

    }

    console.log(draftArr[0]);

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
            value={draftArr[0].title}
          />
          <TextField
            onChange={handleChange}
            placeholder="Content"
            value={draftArr[0].content}
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
            value={draftArr[0].image}
            sx={{
              padding: "1rem",
              borderTop: "solid #aaaaaa",
            }}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="category"
              id="category"
              onChange={handleChange}
             value={selectedCat[0].name}
              name="category"
            >
             
             {categories.map((item) => (
                <MenuItem value={Number(item.id)}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

       
          <Button >Submit</Button>

          </FormControl>

        </Paper>
      </Grid>
    </Grid>
      </Modal>
    </div>
  );
}

export default DraftBlogModal