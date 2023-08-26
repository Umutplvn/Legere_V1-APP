import {
  Button,
  Grid,
  Input,
  Paper,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useDataCall from "../hooks/useDataCall";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import cloneDeep from "lodash/cloneDeep";

const NewBlog = () => {
  const { getData, postData } = useDataCall();
  const { categories } = useSelector((state) => state.blogs);
  const [count, setCount] = useState(-1);

  const status = [
    { name: "Public", letter: "p" },
    { name: "Draft", letter: "d" },
  ];
  const { draft } = useSelector((state) => state.blogs);

  let [category, setCategory] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "",
    slug: "",
  });

  const blogPost = () => {
    if (category.status == "p") {
      postData("blogs", "", category);
      category = {
        title: "",
        content: "",
        image: "",
        category: "",
        status: "",
        slug: "",
      };
    } else {
      let newObj = cloneDeep(category);
      let newArr = [];
      const oldArr = JSON.parse(localStorage.getItem("newArr") || "[]");
      newArr = oldArr;
      newArr.push(newObj);
      localStorage.setItem("newArr", JSON.stringify(newArr));
      console.log(newArr);
    }
  };


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
            <FormControl>
              <Input
                onChange={handleChange}
                placeholder="Title"
                sx={{ padding: "1rem", borderRadius: "1rem" }}
                name="title"
                value={category.title}
              />
            </FormControl>

            <FormControl>
              <TextField
                onChange={handleChange}
                placeholder="Content"
                value={category.content}
                sx={{
                  height: "200px",
                  borderRadius: "1rem",
                  "& fieldset": { border: "none" },
                }}
                multiline
                name="content"
              />
            </FormControl>

            <FormControl>
              <Input
                onChange={handleChange}
                type="text"
                name="image"
                variant="standart"
                placeholder="Image URL"
                value={category.image}
                sx={{
                  padding: "1rem",
                  borderTop: "solid #aaaaaa",
                }}
              />
            </FormControl>

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
              <InputLabel id="demo-simple-select-label">
                Publish/Draft
              </InputLabel>
              <Select
                labelId="Publish/Draft"
                id="Publish/Draft"
                label="Publish/Draft"
                name="status"
                onChange={handleChange}
                value={category.status}
              >
                {status.map((item) => (
                  <MenuItem value={item.letter}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" onClick={blogPost}>
              Submit
            </Button>
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NewBlog;
