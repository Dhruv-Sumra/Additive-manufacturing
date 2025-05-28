import React from 'react'
import Header from './components/home/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Topside from './components/home/Topside'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <Router>
      <Topside/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App