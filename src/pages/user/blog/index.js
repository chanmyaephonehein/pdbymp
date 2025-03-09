import BlogCard from "../../../components/cards/BlogCard";
import React from "react";

const blog = [
  {
    id: 1,
    url: "/image8.png",
    title:
      "The Future of Work: How AI is Transforming the Digital Employee Experience",
    content:
      "Explore how AI-powered tools are revolutionizing the workplace, from automating repetitive tasks to enhancing employee productivity. Learn how AI-Solutions is leading the charge in creating smarter, more efficient work environments.",
    route: "/user/blog/1",
  },
  {
    id: 2,
    url: "/image15.png",
    title: "AI in Action: Real-World Applications Across Industries",
    content:
      "From healthcare to finance, discover how AI-Solutions is helping businesses across sectors leverage AI to solve complex challenges. This article showcases case studies and success stories from our clients.",
    route: "/user/blog/2",
  },
  {
    id: 3,
    url: "/image16.png",
    title: "Prototyping with AI: Faster, Smarter, and More Affordable",
    content:
      "Learn how AI-Solutions is changing the game in prototyping with AI-driven tools that reduce costs and speed up innovation. This blog post highlights the benefits of AI-based prototyping for startups and enterprises alike.",
    route: "/user/blog/3",
  },
  {
    id: 4,
    url: "/image17.png",
    title:
      "AI for Good: How Technology is Enhancing the Digital Employee Experience",
    content:
      "Explore how AI is being used to create a positive impact in the workplace. Discover how AI-Solutions is helping organizations prioritize employee well-being while boosting productivity.",
    route: "/user/blog/4",
  },
];
const Blog = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24">
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
        Insights & Innovations
      </p>
      <p className="text-lg sm:text-xl text-gray-700 mt-3 mb-10 text-center">
        Stay ahead with the latest trends, case studies, and thought leadership
        from AI-Solutions.
      </p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-14">
        {blog.map((item) => (
          <BlogCard
            key={item.id}
            url={item.url}
            title={item.title}
            content={item.content}
            route={item.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
