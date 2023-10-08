import { FcServices, FcIdea } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";

const HomeAbout = () => {
  return (
    <div className="px-8 md:px-10 py-6 bg-[#1111111b] text-center">
      <div className="pt-4  space-y-4 lg:max-w-4xl mx-auto">
        <h2 className="text-5xl font-semibold ">
          We <span  data-aos="fade-up"
     data-aos-anchor-placement="top-center" className="text-[#ff9318cc] font-bold">Create Events </span>
          That Lasts
        </h2>
        <p className="text-xl font-medium">
          We make your events smart & impactful by personalised event management
          services. From Wedding Functions to Birthday Parties or Corporate
          Events to Musical Functions, We offer full range of Events Management
          Services that scale to your needs & budget.
        </p>
      </div>
      <div className="my-6 grid lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <FcServices className="text-5xl"></FcServices>
            <p className="text-[#474646d8] text-xl font-semibold">
              Great Services
            </p>
          </div>
            <p className="text-start text-[#706F6F]">
              From Wedding Functions to Birthday Parties or Corporate Events to
              Musical Functions, We offer full range of Events Management
              Services that scale to your needs & budget.
            </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <IoIosPeople className="text-5xl text-[#ff9318cc]"></IoIosPeople>
            <p className="text-[#474646d8] text-xl font-semibold">
            Great People
            </p>
          </div>
            <p className="text-start text-[#706F6F]">
              From Wedding Functions to Birthday Parties or Corporate Events to
              Musical Functions, We offer full range of Events Management
              Services that scale to your needs & budget.
            </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <FcIdea className="text-5xl text-[#ff9318cc]"></FcIdea>
            <p className="text-[#474646d8] text-xl font-semibold">
            Great Ideas
            </p>
          </div>
            <p className="text-start text-[#706F6F]">
              From Wedding Functions to Birthday Parties or Corporate Events to
              Musical Functions, We offer full range of Events Management
              Services that scale to your needs & budget.
            </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
