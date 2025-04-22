import Dashboard from "../components/Dashboard";
import { Separator } from "@/components/ui/separator";
import CourseContent from "@/components/CourseContent";

const Quizpage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Separator className="bg-blue-400" />
      <div className="flex h-full">
        <div className="sticky top-0 h-screen w-40">
          <Dashboard />
        </div>
        <div className="flex-1 overflow-auto">
          <CourseContent />
        </div>
      </div>
    </div>
  );
};

export default Quizpage;
