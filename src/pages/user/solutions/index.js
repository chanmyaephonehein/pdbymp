import SolutionCard from "@/components/cards/SolutionCard";
import React from "react";

const Solutions = () => {
  const solutionsType = [
    {
      header: "Education",
      data: [
        {
          id: 1,
          title: "AI-Powered Learning Management System",
          content:
            "Personalize learning experiences with adaptive AI that tracks student progress and recommends tailored resources.",
          list: [
            "Real-time performance analytics for teachers.",
            "Gamified learning modules to boost engagement.",
            "Integration with existing school software (e.g., Google Classroom)",
          ],
          button: "Transform your classroom →",
          route: "/user/solutions/1",
        },
        {
          id: 2,
          title: "Automated Grading Assistant",
          content:
            "Save teachers hours with AI that grades assignments, provides feedback, and identifies learning gaps.",
          list: [
            "Supports multiple question types (MCQ, essays).",
            "Plagiarism detection for academic integrity.",
          ],
          button: "See How it works →",
          route: "/user/solutions/2",
        },
      ],
    },
    {
      header: "Finance",
      data: [
        {
          id: 3,
          title: "Fraud Detection AI",
          content:
            "Protect your assets with real-time fraud detection that identifies suspicious transactions with 99% accuracy.",
          list: [
            "Monitors millions of transactions per second.",
            "Reduces false positives by 40%.",
          ],
          button: "Secure Your Systems →",
          route: "/user/solutions/3",
        },
        {
          id: 4,
          title: "AI-Driven Investment Advisor",
          content:
            "Maximize returns with predictive analytics that forecast market trends and optimize portfolios.",
          list: [
            "Personalized investment strategies.",
            "Compliance with FINRA and SEC regulations.",
          ],
          button: "Boost Your ROI →",
          route: "/user/solutions/4",
        },
      ],
    },
    {
      header: "Health Care",
      data: [
        {
          id: 5,
          title: "AI-Powered Diagnostic Assistant",
          content:
            "Reduce diagnostic errors by 50% with AI that analyzes medical images and patient history.",
          list: [
            "Supports radiology, pathology, and cardiology.",
            "HIPAA-compliant data security.",
          ],
          button: "Enhance Patient Care →",
          route: "/user/solutions/5",
        },
        {
          id: 6,
          title: "Patient Flow Optimization",
          content:
            "Reduce wait times and improve hospital efficiency with AI that predicts patient admissions and staff needs.    ",
          list: [
            "Real-time bed availability tracking.",
            "Integration with EHR systems (e.g., Epic, Cerner)",
          ],
          button: "Optimize Your Operations →",
          route: "/user/solutions/6",
        },
      ],
    },
    {
      header: "Governmment",
      data: [
        {
          id: 7,
          title: "Citizen Service Chatbot",
          content:
            "Streamline public services with an AI chatbot that answers citizen queries 24/7, reducing call center loads by 50%.",
          list: [
            "Multilingual support for diverse populations.",
            "Integration with government databases.",
          ],
          button: "Enhance Citizen Experience →",
          route: "/user/solutions/7",
        },
        {
          id: 8,
          title: "AI for Public Safety",
          content:
            "Predict and prevent incidents with AI that analyzes crime data and optimizes resource allocation. ",
          list: [
            "Real-time threat detection.",
            "GDPR-compliant data handling.",
          ],
          button: "Improve Public Safety →",
          route: "/user/solutions/8",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24">
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">
        AI-Driven Software Solutions for Smarter Business Outcomes
      </p>
      {solutionsType.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 mt-10 w-full">
          <p className="text-xl sm:text-2xl font-bold text-center md:text-left md:ml-28 lg:ml-48">
            {item.header}
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-14">
            {item.data.map((itm, idx) => (
              <SolutionCard
                key={itm.id}
                title={itm.title}
                content={itm.content}
                list={itm.list}
                button={itm.button}
                route={itm.route}
                id={itm.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solutions;
