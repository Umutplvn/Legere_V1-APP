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
  backgroundAttachment:"fixed",
  overflow:"scroll",
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

export const btnLead= {
 variant: "contained",
 m:"1rem 0.5rem",
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

export const homeStyle = {
  // backgroundImage:`url(${astronaut})`,
  backgroundColor:"white",
  width:"100%",
  height:"100%",
  backgroundPosition:"cover",
  paddingBottom:"4rem",
  backgroundAttachment:"fixed",



    
}

export const detailPageStyle = {
  // backgroundImage:`url(${space})`,
  backgroundColor:"white",
  m:"auto",
  alignItems:"center",
  height:"100vh",
  display:"flex",
  flexDirection:"column",
  backgroundAttachment:"fixed",


}

export const emojiStyle = {
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


