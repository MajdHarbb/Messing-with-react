// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./components/NotFound";
import Landing from "./pages/Authenticated/Landing";
import ProtectedRoutes from "./helpers/routing/ProtectedRoutes";
import Unauthorized from "./components/Unauthorized";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Landing />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="unauthorized " element={<Unauthorized />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
