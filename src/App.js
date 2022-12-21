import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Card from "./Pages/Card/Card";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Error from "./Pages/Error/Error";
import Naav from "./Components/Nav/Naav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";
import styles from './App.scss';
import "react-toastify/dist/ReactToastify.min.css";
import { Flip, ToastContainer } from "react-toastify";



function App() {
  return (
    <div>
      <div className="App">
        <Naav />
        <div className="main">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer/>
        <ToastContainer limit={2} theme="dark" transition={Flip} position="top-center">

        </ToastContainer>
      </div>

    </div>

  )
}

export default App;
