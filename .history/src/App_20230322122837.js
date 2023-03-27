import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <header>
        <nav className="border py-8 flex justify-between">
          <p>Home</p>

          <ul>
            <li>Sign In</li>
            <li>Sign Out</li>
            <li>Register</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
