import './App.css';
import { Helmet } from "react-helmet";
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer';
import Portfolio from './components/PortFolio';
import Error from './components/Error';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Favicon from 'react-favicon';

function App() {
  return (
    <>
      <Helmet>
        <script src={process.env.PUBLIC_URL+"/assets/vendors/jquery/jquery-3.4.1.js"}></script>
        <script src={process.env.PUBLIC_URL+"/assets/vendors/bootstrap/bootstrap.bundle.js"}></script>
        <script src={process.env.PUBLIC_URL+"/assets/vendors/bootstrap/bootstrap.affix.js"}></script>
        <script src={process.env.PUBLIC_URL+"/assets/js/meyawo.js"}></script>
      </Helmet>
      <Favicon url={process.env.PUBLIC_URL+"/coding_4662115.png"} />
      <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/services' element={<Service />} />
      <Route exact path='/portfolio' element={<Portfolio />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <section className="section-sm bg-primary">
                <div className="container text-center text-sm-left">
                    <div className="row align-items-center">
                    <div className="col-sm offset-md-1 mb-4 mb-md-0">
                        <h6 className="title text-light">Want to work with me?</h6>
                        <p className="m-0 text-light">
                        Always feel Free to Contact &amp; Hire me
                        </p>
                    </div>
                    <div className="col-sm offset-sm-2 offset-md-3">
                        <button className="btn btn-lg my-font btn-light rounded">
                        Hire Me
                        </button>
                    </div>
                    </div>{" "}
                </div>{" "}
            </section> 
    <Footer />
    </>
  );
}

export default App;
