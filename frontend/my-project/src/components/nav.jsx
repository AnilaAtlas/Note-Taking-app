import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
            Home
            Create Note
      </div>
    </nav>
  );
}

export default Navbar;