import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className=" flex flex-col-reverse md:flex-row justify-between items-center lg:max-w-7xl mx-auto ">
      <div className=" w-full px-5 flex flex-col ">
        <p className=" text-4xl md:text-7xl py-5  ">ICT based Business Incubator.</p>
        <p>
          Supporting Growth and Commercialization of Emerging Digital-Based
          Start-ups in Tanzania.
        </p>
        <div className="  ">
          <Link
            to={"/application"}
            className=" max-w-max bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-3 my-5  "
          >
            {" "}
            <span>Apply for Incubation </span>{" "}
            <FaArrowCircleRight className=" text-dtbi-orange" />{" "}
          </Link>
        </div>
      </div>
      <div className=" w-full">
        <img
          className=" lg:max-w-[800px] "
          src="/images/graphic.png"
          alt="graphic"
        />
      </div>
    </div>
  );
}
