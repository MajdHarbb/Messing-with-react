// import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./components/NotFound";
import Landing from "./pages/Authenticated/Landing";
import ProtectedRoutes from "./helpers/routing/ProtectedRoutes";
import Alert from "./components/Alert";
import { useAuth } from "./context/AuthContext";
import Unauthorized from "./components/Unauthorized";

function App() {
  const { state } = useAuth();
  return (
    <>
      <Alert
        open={state.alertDialog.isOpen}
        onClose={state.alertDialog.closeDialog}
        text={state.alertDialog.message}
        title={state.alertDialog.title}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Landing />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
