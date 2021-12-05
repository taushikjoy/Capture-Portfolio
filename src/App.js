import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import OurWork from "./pages/OurWork";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route exact path="/" element={<AboutPage />} />

          <Route path="/work" exact element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
