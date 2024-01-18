import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import Gallery from "./pages/gallery";
import Teams from "./pages/team";

function App() {
    return (
        <Router>
            <Navbar />
            <header className="App-header">
              <h2>
                <a href="/" className="App-link">
                  Vanity
                </a>
              </h2>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/events"
                    element={<Events />}
                />
                <Route
                    path="/gallery"
                    element={<Gallery />}
                />
                <Route path="/team" element={<Teams />} />
            </Routes>
        </Router>

    );
}

export default App;
