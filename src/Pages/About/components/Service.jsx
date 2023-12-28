import { HiMiniSquares2X2 } from "react-icons/hi2";
import StagesCarousel from "./StagesCarousel";


export default function Service() {
  return (
    <div className=" bg-dtbi-blue text-white py-8">
      <div className=" lg:max-w-7xl mx-auto px-5 ">
        <div className=" flex flex-col md:flex-row gap-5 items-center ">
          <div className=" w-full ">
            <HiMiniSquares2X2 className=" text-5xl text-dtbi-orange " />

            <span className=" text-3xl ">
              {" "}
              We provide incubation Services to startups in Tanzania in
              different Stages{" "}
            </span>
          </div>

          <div className=" w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit
            illo repellat!
          </div>
        </div>

        <StagesCarousel />
      </div>
    </div>
  );
}
