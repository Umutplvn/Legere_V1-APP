import bgImage from "../assets/loginWallpaper.jpeg"


export const flexBox = {
  display: "flex",
 m:"auto",
  flexDirection: "column",
  gap: "1.8rem",
  // width: "100%",
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
    mt: "1.2rem",
    backgroundColor:"#3E97EF",
    padding: "2rem 1rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    
  };

export const flexContainer = {
    display: "flex",
    flexDirection: "column",
   alignItems:"center",
    gap: "1rem",
    m: "30px",
    maxWidth:"400px",
    minWidth:"320px",
    justifyContent: "center",
    border:"1px solid black",
    borderRadius: "1rem",
    backgroundColor:"white",
    boxShadow:  "rgba(0, 0, 0, 0.24) 12px 3px 8px",
    padding:"1rem"
    
};


export const loginStyle={
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  backgroundImage:`url(${bgImage})`,
  backgroundPosition:"center",
  backgroundSize:"cover",
  height:"100vh",
  width:"100vw",
  backgroundAttachment:"fixed"
  

}


export const registerContainer= {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  m: "20px",
  maxWidth:"600px",
  minWidth:"300px",
  maxHeight:"85vh",
  padding: "2rem 1rem",
  alignItems: "center",
  border:"1px solid black",
  borderRadius: "1rem",
  backgroundColor:"white",
  boxShadow:  "rgba(0, 0, 0, 0.24) 12px 3px 8px",
  overflow:"scroll"
  
};

export const btnStyle = {
  variant: "contained",
  m:"auto",
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




export const registerStyle={
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  backgroundImage:`url(${bgImage})`,
  height:"100vh",
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundAttachment:"fixed"
  
}