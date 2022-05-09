import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
