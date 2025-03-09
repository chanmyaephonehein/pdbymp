import FeedbackCard from "../../../components/cards/FeedBackCard";
import React from "react";

const feedbacks = [
  {
    id: 1,
    industry: "Education",
    rating: 5,
    feedback:
      "AI-Solutions transformed our online learning platform with their AI-driven analytics tools. Our student engagement has increased by 30%, and administrative tasks are now 50% faster. Highly recommend their innovative approach!",
    author: "– Sarah Thompson, CEO, EduTech Innovators",
  },
  {
    id: 2,
    industry: "Finance",
    rating: 5,
    feedback:
      "AI-Solutions' fraud detection tools have saved us millions by identifying risks in real-time. Their team was professional, responsive, and delivered beyond our expectations. We’re already planning our next project with them!",
    author: "– Emily Zhang, Head of Risk Management, Global Finance Hub ",
  },
  {
    id: 3,
    industry: "Healthcare",
    rating: 4,
    feedback:
      "The AI-powered patient management system from AI-Solutions has been a game-changer for our hospital. It’s reduced wait times by 20% and improved diagnostic accuracy. A few minor tweaks are needed, but overall, we’re thrilled!",
    author: "– Dr. James Carter, Chief Medical Officer, HealthCare Plus",
  },
  {
    id: 4,
    industry: "Government",
    rating: 5,
    feedback:
      "AI-Solutions has been instrumental in helping us implement smart city technologies. Their AI-powered tools have improved traffic management and public safety, resulting in a 25% reduction in response times for emergency services. We couldn’t be happier with the results!",
    author:
      "– Michael O’Connor, Director of Urban Development, Smart City Initiatives",
  },
];

const Feedbacks = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24">
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
        What Our Clients Say About Us
      </p>
      <p className="text-lg sm:text-xl mt-5 mb-10 text-center">
        Discover how AI-Solutions is transforming industries and delivering
        results through the words of our valued clients.
      </p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-14">
        {feedbacks.map((item) => (
          <FeedbackCard
            key={item.id}
            industry={item.industry}
            rating={item.rating}
            feedback={item.feedback}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
