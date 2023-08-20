import { hover } from "@testing-library/user-event/dist/hover";
import bgImage from "../assets/loginWallpaper.jpeg"


export const flexBox = {
  display: "flex",
  flexDirection: "column",
  gap: "1.8rem",
  width: "320px",
  m: "auto",
  padding: "2rem 1rem",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1rem",
};

export const flexBoxRow = {
    display: "flex",
    gap: "1rem",
    color:"white",
    width: "250px",
    m: "auto",
    backgroundColor:"#3E97EF",
    padding: "2rem 1rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    
  };

export const flexContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px",
    m: "auto",
    padding: "2rem 1rem",
    justifyContent: "center",
    alignItems: "center",
    border:"1px solid black",
    borderRadius: "1rem",
    backgroundColor:"white",
    boxShadow:  "rgba(0, 0, 0, 0.24) 12px 3px 8px"
    
};

export const btnStyle = {
  variant: "contained",
  mt:"2rem",
  type: "submit",
  backgroundColor: "#3E97EF",
  color: "white",
  width: "8rem",
  display: "flex",
  "&:hover":{backgroundColor:"primary.dark",  boxShadow:  "rgba(0, 0, 0, 0.24) 2px 3px 3px"}
};


export const icon={
    cursor:"pointer",
    color:"white",
    "&:hover": {color:"black", scale:"1.2", transition:"0.4s"}
}


export const loginStyle={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundImage:`url(${bgImage})`,
    width:"100vw",
    height:"100vh",
    backgroundPosition:"center",
    backgroundSize:"cover"
    


    

}