import Modal from "@mui/material/Modal";
import { Button, Grid, Input, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import useDataCall from "../hooks/useDataCall";
import { useNavigate } from "react-router";



const UpdateModal = ({ updateOpen, handleUpdateClose, item}) => {
const navigate = useNavigate()
  useEffect(() => {
    getData("categories");
  }, []);

  const { categories } = useSelector((state) => state.blogs);
  const{putData, getData}=useDataCall()
  const [info, setInfo]=useState(item)
console.log(info);

  const handleChange = (e) => {
    setInfo({...info, [e.target.name]:e.target.value})
};

  const handleSubmit=(id)=>{ 
    putData("blogs", id, info)
    handleUpdateClose()
    navigate("/")
  }




  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleUpdateClose}
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

               <FormControl fullWidth>
                 <InputLabel id="demo-simple-select-label">
                   Category
                 </InputLabel>
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
               <Button onClick={handleUpdateClose}>Cancel</Button>
               <Button onClick={()=>handleSubmit(item.id)}>Public</Button>
             </FormControl>
           </Paper>
   
           

          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default UpdateModal;
