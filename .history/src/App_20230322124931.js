import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <header className="fixed w-full ">
        <nav className="border py-8 flex justify-between px-8 text-lg text-white bg-blue-500 h-[6rem]">
          <p className="hover:font-bold cursor-pointer">Home</p>
          <ul className="flex  ">
            <NavLink to="/login">
              <li className="mx-4 hover:font-bold cursor-pointer">Sign In</li>
            </NavLink>
            <li className="mx-4 hover:font-bold cursor-pointer">Sign Out</li>
            <li className="ml-4 hover:font-bold cursor-pointer">Register</li>
          </ul>
        </nav>
      </header>
      <main className="pt-[5rem]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
