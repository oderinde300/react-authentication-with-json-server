import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <header>
        <nav className="border py-8 flex justify-between px-8 text-lg text-white bg-blue-500 fixed w-full mb-[5rem]">
          <p className="">Home</p>
          <ul className="flex  ">
            <li className="mx-4 ">Sign In</li>
            <li className="mx-4 ">Sign Out</li>
            <li className="ml-4 ">Register</li>
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
