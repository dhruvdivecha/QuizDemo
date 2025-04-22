import { useState } from "react";
import { Button } from "./ui/button";
import Quiz from "@/pages/Quiz";

const CourseContent = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <div className="border-gray-200 ml-3 mr-3 border-2 border-gray-200 rounded-lg mt-3">
      <section
        id="module1"
        className="p-3 rounded-lg border-2 border-gray-200 m-4 mt-6"
      >
        <div className="">
          <h1>Module 1</h1>
          <br />
          <p>
            This module introduces you to the basic foundation of computational
            logic formulation (CLF) comprised of propositional logic, sets,
            functions, and relations. Propositional logic plays an important
            role in CLF by providing a formal framework for reasoning about
            boolean values, expressing logical relationships, and reasoning in
            proofs. Set theory is a useful tool in CLF, especially in
            formalizing and reasoning about the objects of a computation logic
            by providing fast and efficient operations such as checking if
            certain elements of an object are present for proper modeling,
            reasoning, and computing. Functions are crucial in CLF because they
            support mapping and transformations by describing how elements from
            one set relate to elements in other sets. In algorithm design,
            functions define input-output relationships, allowing CLF to model
            real-world processes, simulate the processes, analyze data, and
            solve complex problems into smaller, manageable pieces. The relation
            is important in CLF because of captures/expresses relationships
            between elements of different objects, their transformation,
            analytical structure, and computation, which are necessary
            ingredients for building robust systems and solving complex
            problems. Please begin by listening to the video below for a
            highlight on discrete structures for computer science.
          </p>
        </div>
        <div>
          <Button
            variant="outline"
            onClick={() => {
              setShowQuiz(true);
            }}
          >
            Take Quiz
          </Button>
        </div>

        {showQuiz && (
          <Quiz
            onClose={() => {
              setShowQuiz(false);
            }}
          />
        )}
      </section>
      <section
        id="module2"
        className="p-3 rounded-lg border-2 border-gray-200 m-4 mt-6"
      >
        <h1>Module 2</h1>
        <br />
        <p>
          Discrete Structure involves mathematical concepts and techniques that
          deal with countable, distinct elements or objects, which play a
          crucial role in basic logic and algorithm design. In the previous
          module, you learned about set theory and notation, which are
          fundamental concepts for defining data structures and relationships in
          algorithms. You also learned about functions and relations, which are
          essential for modeling relationships between data elements and play a
          significant role in algorithm design and analysis. In this and later
          modules, you will learn about mathematical logic, including Predicates
          and Quantifiers, which play a crucial role in expressing complex
          statements in mathematical logic for algorithm design. The two allow
          us to reason about properties across different elements and domains.
          Let's begin the module by watching the video below, and thereafter
          delve into learning activities for this module.
        </p>
      </section>
      <section
        id="module3"
        className="p-3 rounded-lg border-2 border-gray-200 m-4 mt-6"
      >
        <h1>Module 3</h1>
        <br />
        <p>
          Introduction to the Course Discrete Structure is a course that
          introduces a computer science student to countable mathematical
          structures that can be broken down into distinct and separate parts.
          The course plays a fundamental role in various areas of computer
          science, including algorithms, data structures, cryptography, and
          artificial intelligence. The knowledge obtained in this course
          provides the mathematical foundation for understanding and analyzing
          various aspects of computer science to help us reason about
          algorithms, data, and computation precisely and rigorously. Course
          Objectives Develop a fundamental understanding of discrete
          mathematical structures such as propositional logic, predicate logic,
          sets, relations, graphs, and their applications in Computer science
          and engineering. Provides basic proof skills to prove properties of
          discrete structures and to apply counting techniques to examine
          discrete structures. Introduce basic skills of mathematical modeling
          using discrete structures.
        </p>
      </section>
    </div>
  );
};

export default CourseContent;
