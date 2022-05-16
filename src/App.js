import { Route, Routes } from "react-router-dom";
import Appointments from "./Pages/Appointments/Appointments";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointmnet from "./Pages/Dashboard/MyAppointmnet";
import MyReview from "./Pages/Dashboard/MyReview";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/appointments" element={
          <RequireAuth><Appointments /></RequireAuth>
        }></Route>

        <Route path="/dashboard" element={
          <RequireAuth><Dashboard /></RequireAuth>
        }>
          <Route index element={<MyAppointmnet />}></Route>
          <Route path="/dashboard/myreview" element={<MyReview />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
