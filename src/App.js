import { BrowserRouter, Routes, Route } from "react-router-dom"
import Approuter from "./router/Approuter";
import { Login } from "@mui/icons-material";

function App() {
  return (
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  );
}

export default App;
