import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFund from "./pages/NotFund";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookListing from "./pages/BookListing";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./pages/signupLogin/register";
import Login from "./pages/signupLogin/login";
import Dashboard from "./pages/dashboard/dashboard";
function App() {
  return (
    <>
    <Header/>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/bookListing" element={<BookListing />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<NotFund />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
