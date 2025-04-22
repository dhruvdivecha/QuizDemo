import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex sticky top-0 bg-blue-200 p-4">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/courses">My Courses</Link>
      </div>
    </header>
  );
};

export default Navbar;
