import React from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./homePage/Homepage";
import Navbar from "./homePage/Navbar";
function App() {
    return (
        <Router>
            <Navbar/>
            {/* put route here  */}
            <Routes>
                <Route path="/" element={<Homepage />}/>
            </Routes>
        </Router>
    )
}

export default App
