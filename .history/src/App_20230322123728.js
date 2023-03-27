import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="m-0">
      <header className="fixed w-full ">
        <nav className="border py-8 flex justify-between px-8 text-lg text-white bg-blue-500 h-[6rem]">
          <p className="hover:font-bold cursor-pointer">Home</p>
          <ul className="flex  ">
            <li className="mx-4 hover:font-bold cursor-pointer">Sign In</li>
            <li className="mx-4 hover:font-bold cursor-pointer">Sign Out</li>
            <li className="ml-4 hover:font-bold cursor-pointer">Register</li>
          </ul>
        </nav>
      </header>
      <main className="pt-[5rem]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
