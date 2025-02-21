import { useRouter } from "next/router";
import { useEffect } from "react";

const solutions = [
  { id: 1, title: "AI-Powered Learning Management System" },
  // { id: 2, title: "Automated Grading Assistant" },
  // { id: 3, title: "Fraud Detection AI" },
  // { id: 4, title: "AI-Driven Investment Advisor" },
  // { id: 5, title: "AI-Powered Diagnostic Assistant" },
  // { id: 6, title: "Patient Flow Optimization" },
  // { id: 7, title: "Citizen Service Chatbot" },
  // { id: 8, title: "AI for Public Safety" },
];

const EachSolution = () => {
  const router = useRouter();
  const queryId = router.query.id;
  const getTitle = solutions.find((item) => item.id === Number(queryId));

  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col items-center text-center md:p-6 w-2/3">
        <p className="text-3xl font-semibold">{getTitle?.title}</p>
        <p className="text-lg mt-6">
          Transform Your Classroom with AI-Driven Personalization!
        </p>
        <p className="text-lg mb-6">
          Enhance the learning experience with an intelligent LMS that adapts to
          each student’s needs, tracks progress, and provides real-time insights
          for teachers.
        </p>
        <img src="/image7.png" className="w-1/2 rounded-lg mb-20" />
        <h2 className="text-xl font-bold">Key Features</h2>
        <h3 className="text-lg font-semibold mt-4">For Students 🎓</h3>
        <p className="mt-2">
          <strong>AI-Driven Personalized Learning</strong> – The system adapts
          content based on individual learning pace and progress.
        </p>
        <p>
          <strong>Gamified Learning Modules</strong> – Engaging quizzes,
          leaderboards, and badges to boost motivation.
        </p>
        <p>
          <strong>Smart Resource Recommendations</strong> – AI suggests relevant
          study materials based on student performance.
        </p>
        <p>
          <strong>Interactive Assessments</strong> – Adaptive tests that adjust
          difficulty levels based on student responses.
        </p>

        <h3 className="text-lg font-semibold mt-6">For Teachers 🧑‍🏫</h3>
        <p className="mt-2">
          <strong>Real-time Performance Analytics</strong> – Track student
          progress with AI-powered dashboards.
        </p>
        <p>
          <strong>Automated Grading & Feedback</strong> – AI-driven assessments
          with instant feedback and recommendations.
        </p>
        <p>
          <strong>Customizable Course Creation</strong> – Easily create and
          manage lessons, assignments, and quizzes.
        </p>
        <p>
          <strong>Classroom Management Tools</strong> – Monitor attendance,
          performance trends, and student engagement.
        </p>

        <div className="w-full border-t-2 border-gray-300 my-8"></div>

        <h2 className="text-2xl font-bold mb-4">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold">
              Basic Plan (Free / Limited Features)
            </h3>
            <ul className="mt-2 text-sm">
              <li>AI-powered progress tracking</li>
              <li>Basic quizzes & assignments</li>
              <li>Google Classroom integration</li>
              <li>Limited analytics for teachers</li>
              <li>Up to 50 students per class</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold">
              Standard Plan ($25/month per teacher)
            </h3>
            <ul className="mt-2 text-sm">
              <li>Everything in Basic Plan +</li>
              <li>Gamified learning modules</li>
              <li>Smart resource recommendations</li>
              <li>Advanced analytics & reports</li>
              <li>Automated grading & feedback</li>
              <li>Up to 200 students per class</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 shadow-md border-dashed border-blue-500">
            <h3 className="text-xl font-semibold">
              Premium Plan ($50/month per teacher or Custom for Institutions)
            </h3>
            <ul className="mt-2 text-sm">
              <li>Everything in Standard Plan +</li>
              <li>AI-powered adaptive assessments</li>
              <li>Real-time student behavior insights</li>
              <li>API access & third-party integrations</li>
              <li>Multi-language support</li>
              <li>Dedicated support & training</li>
              <li>Unlimited students per class</li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t-2 border-gray-300 my-8"></div>

        <h2 className="text-2xl font-bold mb-4">Why Choose Our LMS?</h2>
        <p>
          Boost Student Engagement – Gamification & AI-powered recommendations
          keep students motivated.
        </p>
        <p>
          Save Time for Teachers – Automated grading and smart insights help
          streamline lesson planning.
        </p>
        <p>
          Seamless Classroom Integration – Works effortlessly with your existing
          tools (Google Classroom, Teams, etc.).
        </p>
        <p>
          Data-Driven Teaching – Make informed decisions with real-time
          analytics.
        </p>
        <p className="font-semibold mt-4">
          Ready to Transform Learning?{" "}
          <button
            onClick={() => router.push({ pathname: "/user/contactus" })}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Contact Us
          </button>
        </p>
      </div>
    </div>
  );
};

export default EachSolution;
