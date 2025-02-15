import IndustryImgCard from "@/components/cards/IndustryImgCard";
import SolutionCard from "@/components/cards/SolutionCard";

const images = [
  {
    id: 1,
    title: "Education",
    url: "/image2.png",
    route: "/user/industries/1",
  },
  {
    id: 2,
    title: "Finance  ",
    url: "/image3.png",
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
  return (
    <div className="flex flex-col items-center">
      <img src="/image20.png" className="w-1/2 rounded-lg mb-20" />
      <div className="flex gap-2 items-center">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-3xl font-semibold">
            Empowering Tomorrow with Intelligent Solutions Today
          </p>
          <div className="flex justify-center">
            <p className="text-xl w-2/3 text-center">
              Transform Your Business with Custom AI Solutions Built for
              Scalability, Efficiency, and Innovation.
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-lg text-gray-700 w-5/6">
              At AI-Solution, our mission is to transform complex challenges
              into opportunities through cutting-edge AI technology. We empower
              businesses to innovate, optimize, and lead in their industries
              with ethical, scalable solutions.
            </p>
          </div>
        </div>
        <img src="/image1.png" className="w-1/4 rounded-lg" />
      </div>
      <p className="mt-20 mb-10 text-3xl font-semibold">
        Solutions By Industies
      </p>
      <div className="flex gap-10">
        {images.map((item) => (
          <IndustryImgCard
            key={item.id}
            source={item.url}
            title={item.title}
            route={item.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
