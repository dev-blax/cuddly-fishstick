import "./About.css";
import FooterComponent from "./components/FooterComponent";
import { Link } from "react-router-dom";
import { NavigationMega } from "../../Components/Navigation/NavigationMega";
import { GiArcheryTarget } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";
const About = () => {
  return (
    <div>
      <NavigationMega />

      <div className=" bg-gradient-to-t from-dtbi-blue/5 to-transparent ">
        <div className=" flex flex-col md:flex-row md:space-x-10 md:max-w-7xl  md:mx-auto md:py-10 ">
          <div className=" w-full md:w-1/2 flex flex-col gap-5 text-center md:text-start p-5 md:p-0 ">
            <div className=" flex justify-center md:justify-start  ">
              <h1 className=" bg-dtbi-orange/30 px-4 py-2 rounded-lg ">
                {" "}
                About DTBI{" "}
              </h1>
            </div>

            <p className=" text-2xl text-dtbi-blue font-semibold capitalize ">
              ICT business incubator based in Tanzania
            </p>
            <p className=" text-gray-600 text-sm">
              DTBi is a Tech Incubator in the country that promotes the growth
              of ICT technology-based emerging companies, Start-ups and those
              with innovative ideas contributing to job creation{" "}
              <span className=" text-dtbi-blue ">
                (including youth and women)
              </span>{" "}
              and enhanced economic health of the nation.
            </p>

            <p className=" text-gray-600 text-sm">
              The Dar Teknohama Business Incubator (DTBi) is a Not-For-Profit
              Company run as a business registered in Tanzania. It has its own
              Board made up of members from Private Sector, Public Sector, NGOs
              & CSO. COSTECH is a shareholder and is part of the founding
              members, which includes infoDev of the World Bank. DTBi is a Tech
              Incubator in the country that promotes the growth of ICT
              technology-based emerging companies, Start-ups and those with
              innovative ideas contributing to job creation (including youth and
              women) and enhanced economic health of the nation.
            </p>
            <div>
              <Link to={"/contact"} className=" btn bg-dtbi-orange text-white ">
                {" "}
                Contact us{" "}
              </Link>
            </div>
          </div>

          <div className=" p-5 md:p-0">
            <div className=" rounded-2xl overflow-hidden">
              <img
                src="\images\about_DTBI.jpg"
                alt="about dtbi image"
                className=" md:h-96 "
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-dtbi-blue text-white">
        <div className=" flex flex-col md:flex-row gap-5 px-5 md:gap-10 md:justify-around max-w-7xl mx-auto py-10 ">
          <div className=" flex flex-col items-center gap-3 md:w-80 rounded-2xl p-5 md:aspect-square bg-ligth-dtbi-blue ">
            <div className=" p-3 rounded-full bg-dtbi-orange ">
              <GiArcheryTarget className=" h-10 w-10 " />
            </div>
            <h2 className=" text-3xl"> Our Mission </h2>
            <p className=" text-sm  text-center text-gray-300">
              The Dar Teknohama Business Incubator (DTBi) is a Not-For-Profit
              Company run as a business registered in Tanzania. It has its own
              Board made up of members from Private Sector, Public Sector, NGOs
              & CSO. COSTECH is a shareholder and is part of the founding
              members, which includes infoDev of the World Bank.
            </p>
          </div>

          <div className=" flex flex-col items-center gap-3 md:w-80 rounded-2xl p-5 md:aspect-square bg-ligth-dtbi-blue ">
            <div className=" p-3 rounded-full bg-dtbi-orange ">
              <IoRocketSharp className=" h-10 w-10 " />
            </div>
            <h2 className=" text-3xl"> Our Vision </h2>
            <p className=" text-sm  text-center text-gray-300">
              DTBi is a Tech Incubator in the country that promotes the growth
              of ICT technology-based emerging companies, Start-ups and those
              with innovative ideas contributing to job creation (including
              youth and women) and enhanced economic health of the nation
            </p>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default About;
