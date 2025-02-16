import { useRouter } from "next/router";

const EachBlog = () => {
  const router = useRouter();
  return (
    <div className=" px-4 py-12 flex flex-col items-center ">
      <h1 className="text-3xl font-bold mb-10">
        The Future of Work: How AI is Transforming the Digital Employee
        Experience
      </h1>

      <img src="/image21.png" className="w-1/2 mb-10" />

      <p className="text-gray-700 mx-24 text-center">
        AI is revolutionizing the workplace by automating repetitive tasks,
        enhancing productivity, and enabling smarter collaboration. From
        predictive analytics to personalized learning platforms, AI-powered
        tools empower employees to work smarter and more efficiently. At
        AI-Solutions, we’re leading this transformation with innovative tools
        that streamline workflows, improve decision-making, and create a more
        engaging employee experience. Discover how AI can help your organization
        thrive in the digital age—
        <a
          onClick={() => router.push({ pathname: "/user/contactus" })}
          className="text-blue-500 font-semibold cursor-pointer"
        >
          [Contact Us]
        </a>
        today to learn more!
      </p>
    </div>
  );
};

export default EachBlog;
