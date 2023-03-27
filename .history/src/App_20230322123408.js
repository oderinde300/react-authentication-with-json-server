import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <header className="fixed w-full h-[15rem]">
        <nav className="border py-8 flex justify-between px-8 text-lg text-white bg-blue-500 ">
          <p className="">Home</p>
          <ul className="flex  ">
            <li className="mx-4 ">Sign In</li>
            <li className="mx-4 ">Sign Out</li>
            <li className="ml-4 ">Register</li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
