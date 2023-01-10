import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NowPage from "./pages/NowPage/NowPage";

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage?.login) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/now" element={<NowPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
