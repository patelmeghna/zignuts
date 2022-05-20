import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./Layout/Footer/Footer";
import NavProvider from "./Layout/Header/Context/NavContext";

const App = () => {
  return (
    <Router>
      <NavProvider>
        {/* ===== begin::header ===== */}
        <Header />
        {/* ===== end::header ===== */}

        {/* ===== begin::page route ===== */}
        <Routes>
          {/* Begin::home page */}
          <Route path="/" element={<Home />} />
          {/* end::home page */}

          {/* begin::404 page */}
          <Route path="*" element={<Home />} />
          {/* end::404 page */}
        </Routes>
        {/* ===== end::page route ===== */}
        
        {/* ===== begin::footer ===== */}
        <Footer />
        {/* ===== end::footer ===== */}
      </NavProvider>
    </Router>
  );
};

export default App;
