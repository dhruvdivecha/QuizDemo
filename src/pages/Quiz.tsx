import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { quizQuestions } from "@/components/quizQuestions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Quiz = ({ onClose }: { onClose: () => void }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (showResult) return;

    if (time <= 0) {
      setShowResult(true);
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, showResult]);

  const handleNext = () => {
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctOption) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
            <p className="text-lg mb-4">
              Your score: {score}/{quizQuestions.length}
            </p>
            <Button onClick={onClose}>Close Quiz</Button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Question {currentQuestionIndex + 1}
              </h2>
              <p className="text-gray-600">{time} seconds left</p>
              <p className="text-gray-600">{currentQuestion.text}</p>
            </div>

            <RadioGroup
              value={selectedAnswer || ""}
              onValueChange={(value) => setSelectedAnswer(value)}
              className="space-y-2 mb-6"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="text-lg">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button onClick={handleNext} disabled={!selectedAnswer}>
                {currentQuestionIndex < quizQuestions.length - 1
                  ? "Next"
                  : "Finish"}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
