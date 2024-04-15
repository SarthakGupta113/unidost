import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/Home";
import Scholarship from "./pages/Scholarship";
import University_Page from "./pages/University_Page";
import Navbar from './components/Navbar';
import ResumeBuilder from "./pages/Resume";
import Lor from "./pages/Lor";
const ProjectRoutes = () => {
    return (
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/university/:name" element={<University_Page/>} />
            <Route exact path="/scholarship-form" element={<Scholarship />} />
            <Route exact path="/university/:name" element={<University_Page />} />
            <Route exact path="/resume" element={<ResumeBuilder />} />
            <Route exact path="/lor" element={<Lor />} />
          </Routes>
        </Router>
      </React.Suspense>
    );
  };
  export default ProjectRoutes;