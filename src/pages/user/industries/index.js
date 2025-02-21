import SolutionCard from "@/components/cards/SolutionCard";
import React, { useState } from "react";

const industries = [
  {
    id: 1,
    title: "Education",
    route: "/user/industries/1",
    content:
      "AI-Solutions empowers educational institutions with cutting-edge tools to enhance learning experiences and streamline administrative processes. From AI-driven student performance analytics to virtual classroom assistants, we help schools and universities innovate for the future.",
  },
  {
    id: 2,
    title: "Finance",
    route: "/user/industries/2",
    content:
      "AI-Solutions transforms the finance sector with secure, AI-driven tools for fraud detection, risk assessment, and customer service automation. Our solutions help financial institutions stay ahead in a competitive, data-driven market.",
  },
  {
    id: 3,
    title: "Healthcare",
    route: "/user/industries/3",
    content:
      "Our AI-powered solutions revolutionize healthcare by improving patient care and operational efficiency. From predictive diagnostics to intelligent patient management systems, we enable healthcare providers to deliver faster, more accurate services.",
  },
  {
    id: 4,
    title: "Government",
    route: "/user/industries/4",
    content:
      "We support government agencies with AI tools that enhance public service delivery and decision-making. From smart city initiatives to predictive analytics for policy planning, our solutions drive efficiency and transparency in governance.",
  },
];

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    ["/image5.png", "/image6.png", "/image4.png"],
    ["/image5.png", "/image6.png", "/image4.png"],
  ];

  const moveSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24">
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">
        The Industries We Provide
      </p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-14 mb-20">
        {industries.map((item) => (
          <SolutionCard
            key={item.id}
            title={item.title}
            content={item.content}
            button="Read more"
            route={item.route}
          />
        ))}
      </div>
      <p className="text-2xl font-semibold mb-4">Our work</p>
      <div className="overflow-hidden w-full flex justify-center">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((slide, i) => (
            <div key={i} className="min-w-full flex justify-center gap-4">
              {slide.map((src, j) => (
                <img
                  key={j}
                  src={src}
                  alt={`Image ${i * 3 + j + 1}`}
                  className="w-[30%] h-[300px] object-cover rounded-lg flex-shrink-0"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        {[0, 1].map((index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-2 rounded-full inline-block cursor-pointer ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => moveSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Industries;
