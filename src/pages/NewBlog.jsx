import { Button, Grid, Input, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useDataCall from "../hooks/useDataCall";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const NewBlog = () => {
  const { getData, postData } = useDataCall();
  const { categories } = useSelector((state) => state.blogs);
  const status = [{name:"Public", letter:"p"},{name:"Draft", letter:"d"}]
  const [category, setCategory] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "",
    slug: "",
  });

  console.log(category);


  useEffect(() => {
    getData("categories");
  }, []);

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };


  return (
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
          />
          <TextField
            onChange={handleChange}
            placeholder="Content"
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
            sx={{
              padding: "1rem",
              borderTop: "solid #aaaaaa",
              borderRadius: "1rem",
            }}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="category"
              id="category"
              label="Category"
              onChange={handleChange}
              value={category.category}
              name="category"
            >
              {categories.map((item) => (
                <MenuItem value={Number(item.id)}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Publish/Draft</InputLabel>
            <Select
              labelId="Publish/Draft"
              id="Publish/Draft"
              label="Publish/Draft"
              name="status"
              onChange={handleChange}
              value={category.status}
            >
             {status.map((item)=>
              <MenuItem value={item.letter}>{item.name}</MenuItem>
             )}
            </Select>
          </FormControl>
          <Button onClick={()=>postData("blogs","",category)}>Submit</Button>
          </FormControl>

        </Paper>
      </Grid>
    </Grid>
  );
};

export default NewBlog;