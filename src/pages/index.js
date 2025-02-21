import { useRouter } from "next/router";
import IndustryImgCard from "@/components/cards/IndustryImgCard";
import SolutionCard from "@/components/cards/SolutionCard";

const images = [
  {
    id: 1,
    title: "Finance",
    url: "/image3.png",
    route: "/user/industries/1",
  },
  {
    id: 2,
    title: "Education",
    url: "/image2.png",
    route: "/user/industries/1",
  },
  {
    id: 3,
    title: "Healthcare",
    url: "/image4.png",
    route: "/user/industries/2",
  },
  {
    id: 4,
    title: "Government",
    url: "/image5.png",
    route: "/user/industries/3",
  },
];

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <img
        src="/image20.png"
        alt="Hero Image"
        className="w-full max-w-lg rounded-lg mb-10 md:mb-20"
      />
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-2xl md:text-3xl font-semibold">
            Empowering Tomorrow with Intelligent Solutions Today
          </p>
          <div className="flex justify-center md:justify-start">
            <p className="text-lg md:text-xl w-full md:w-2/3 text-center md:text-left">
              Transform Your Business with Custom AI Solutions Built for
              Scalability, Efficiency, and Innovation.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <p className="text-sm md:text-lg text-gray-700 w-full md:w-5/6 text-center md:text-left">
              At AI-Solution, our mission is to transform complex challenges
              into opportunities through cutting-edge AI technology. We empower
              businesses to innovate, optimize, and lead in their industries
              with ethical, scalable solutions.
            </p>
          </div>
        </div>
        <img
          src="/image1.png"
          alt="AI Illustration"
          className="w-3/4 md:w-1/3 rounded-lg"
        />
      </div>
      <p className="mt-10 md:mt-20 mb-6 md:mb-10 text-2xl md:text-3xl font-semibold">
        Solutions By Industries
      </p>
      <div className="flex gap-4 md:gap-10 mb-10 flex-wrap justify-center">
        {images.map((item) => {
          return item.id === 1 ? (
            <div
              key={item.id}
              className="cursor-pointer"
              onClick={() => router.push(item.route)}
            >
              <IndustryImgCard source={item.url} title={item.title} />
            </div>
          ) : (
            <div
              key={item.id}
              className="cursor-pointer"
              // onClick={() => router.push(item.route)}
            >
              <IndustryImgCard source={item.url} title={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
