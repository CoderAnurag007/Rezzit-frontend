import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/homepage/home";
import ProfilePage from "./pages/Profielpage/ProfilePage";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Otp from "./pages/Demo/Otp";

function App() {
  const user = useSelector((state) => state.AuthReducer.authData);
  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={user ? <Navigate to={"home"} /> : <Navigate to={"auth"} />}
        />
        <Route
          path="/"
          element={user ? <Navigate to={"home"} /> : <Navigate to={"auth"} />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to={"../auth"} />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to={"../home"} /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <ProfilePage /> : <Navigate to={"auth"} />}
        />
        <Route path="/demo" element={<Otp />} />
      </Routes>

      {/* <div className="blur" style={{ top: "-12%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div> */}
    </div>
  );
}

export default App;
