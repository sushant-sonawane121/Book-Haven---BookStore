import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFund from "./pages/NotFund";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookListing from "./pages/BookListing";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <Header/>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookListing" element={<BookListing />} />
        <Route path="*" element={<NotFund />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
