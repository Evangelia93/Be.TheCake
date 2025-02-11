import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import CakeForm from "./pages/CakeForm";
import Gallery from "./pages/Gallery";
import BasicCakes from "./pages/BasicCakes";
import SignIn from "./components/SignIn";
import ScrollToTop from "./components/ScrollToTop"; 
import Photos from "./components/Photos";
import CakeDetails from "./pages/CakeDetails";
import Cards from "./components/Cards";


function Layout() {
  return (
    <div className="layout">
      {/* <Photos /> */}
      {/* <Header /> */}
      <main className="content">
        <ScrollToTop /> 
        <Outlet /> 
      </main>
      {/* <Footer /> */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="cakeform" element={<CakeForm />} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="basiccakes" element={<BasicCakes/>} />
          <Route path="signin" element={<SignIn/>}/> 
          <Route path="basiccakes/:id" element={<CakeDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;