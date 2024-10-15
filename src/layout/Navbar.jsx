import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-orange-400 w-full h-24 z-0 rounded-full absolute blur-xl"></div>
      <nav className="bg-gray-800 p-8 opacity-80 backdrop-blur-md z-10">
        <div className="justify-around items-center flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-500 duration-300">
            Главная страница
          </Link>
          <Link
            to="/citizens"
            className="text-white hover:text-gray-500 duration-300"
          >
            Картотека
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
