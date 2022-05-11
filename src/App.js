import { Route, Routes } from "react-router-dom";
import Appointments from "./Pages/Appointments/Appointments";
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
        <Route path="/appointments" element={<Appointments />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
