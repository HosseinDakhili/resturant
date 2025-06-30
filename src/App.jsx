import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactsUs";
import Items from "./Pages/Items";
import Login from "./Pages/Auth/Login";
import NotFound from "./Pages/NotFound";
import { useContext } from "react";
import AuthContextProvider, { AuthContext } from "./Context/AuthContext";
import ItemDetails from "./Pages/ItemDetails";


export default function App() {
  const {token} = useContext(AuthContext)
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/items" element={<Items />} />
        <Route path="/item-details/:id/:name" element={<ItemDetails/>} />
        <Route path="/login" element={token?<Navigate to='/'/>:<Login/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <Toaster />
      
    </>
  );
}
