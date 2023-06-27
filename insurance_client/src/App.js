// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Update from "./components/Update";
import GetInsurance from "./components/GetInsurance";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/resume-insurance/:id" element={<GetInsurance/>}></Route>
        <Route path="/edit-insurance/:id" element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
