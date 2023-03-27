import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const menuLinks = [
    {
      title: "Sign In",
      path: "/login",
    },

    {
      title: "Sign Out",
      path: "/logout",
    },
    {
      title: "Register",
      path: "/register",
    },
  ];
  return (
    <div>
      <header className="fixed w-full ">
        <nav className="border py-8 flex justify-between px-8 text-lg text-white bg-blue-500 h-[6rem]">
          <p className="hover:font-bold cursor-pointer">Home</p>
          <ul className="flex  ">
            {menuLinks.map((link) => (
              <NavLink to={`${link.path}`} key={link.path}>
                <li className="mx-4 hover:font-bold cursor-pointer [&:not(:last-child)]:mr-4">
                  {link.title}
                </li>
              </NavLink>
            ))}
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
