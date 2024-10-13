import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="justify-around items-center flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Дашборд
        </Link>
        <Link to="/citizens" className="text-white hover:text-gray-300">
          Картотека
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
