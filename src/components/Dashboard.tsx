import { HashLink } from "react-router-hash-link";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 h-screen p-4 w-40 fixed left-0">
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-600 font-semibold mb-2">Course Modules</h2>
        <HashLink smooth to="/#module1">
          <NavButton text="Module 1" />
        </HashLink>
        <HashLink smooth to="/#module2">
          <NavButton text="Module 2" />
        </HashLink>
        <HashLink smooth to="/#module3">
          <NavButton text="Module 3" />
        </HashLink>
      </div>
    </div>
  );
};

const NavButton = ({ text }: { text: string }) => {
  return (
    <button
      className={`w-full text-left text-gray-600 text-sm font-medium px-4 py-2.5 rounded-lg transition-all
        hover:bg-blue-50 hover:text-blue-700 
        focus:outline-none focus:ring-2 focus:ring-blue-300
        active:bg-blue-100 active:scale-[0.98]`}
    >
      {text}
    </button>
  );
};

export default Dashboard;
