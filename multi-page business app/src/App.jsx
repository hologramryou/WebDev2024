import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react"
import Header from "./header/Header"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
