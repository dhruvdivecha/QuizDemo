interface Question {
  id: number;
  text: string;
  options: string[];
  correctOption: string;
}

export const quizQuestions: Question[] = [
    {
      id: 1,
      text: "What is the foundation of computational logic?",
      options: ["Sets", "Functions", "Propositional Logic", "Relations"],
      correctOption: "Propositional Logic"
    },
    {
      id: 2,
      text: "Which of these is NOT a discrete structure?",
      options: ["Graphs", "Sets", "Real Numbers", "Integers"],
      correctOption: "Real Numbers"
    },
    {
    id: 3,
    text: "What is used to model relationships between data elements?",
    options: ["Functions", "Sets", "Algorithms", "Relations"],
    correctOption: "Relations",
  },
];
