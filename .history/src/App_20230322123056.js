import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <header>
        <nav className="border py-8 flex justify-between px-8 text-lg bg-blue-500">
          <p className="text-lg text-white">Home</p>
          <ul className="flex  ">
            <li className="mx-4 text-lg text-white">Sign In</li>
            <li className="mx-4 text-lg text-white">Sign Out</li>
            <li className="ml-4 text-lg text-white">Register</li>
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
