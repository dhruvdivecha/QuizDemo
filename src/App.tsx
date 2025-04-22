import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Quizpage from "./pages/CoursePage";

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<Quizpage />} />
            <Route path="/courses" element={<div>Courses Page</div>} />
            <Route path="*" element={<Quizpage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
