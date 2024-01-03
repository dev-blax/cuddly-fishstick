import FooterComponent from "../About/components/FooterComponent";
import { GoLaw } from "react-icons/go";
import { MdConnectWithoutContact } from "react-icons/md";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { NavigationMega } from "../../Components/Navigation/NavigationMega";
import StartupForm from "./StartupForm";

export default function StartupApplication() {
  return (
    <div>
      <NavigationMega />

      <StartupForm />

      <div className="bg-dtbi-blue text-white ">
        <div className=" py-10 my-10 max-w-7xl mx-auto px-5  ">

          <div className=" flex flex-col md:flex-row max-w-7xl mx-auto mb-16  ">
            <p className=" w-full text-2xl "> Why you shoud Apply? </p>
            <p className=" w-full text-sm text-gray-400 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              molestias earum illum, optio eum delectus corporis quaerat,
              laudantium doloribus, alias sequi.
            </p>
          </div>

          <div className=" flex flex-col md:flex-row justify-center gap-10  ">
            <div className=" flex flex-col items-center gap-3 hover:bg-dtbi-orange/80 px-3 py-5 rounded-lg cursor-pointer ">
              <HiMiniSquares2X2 className=" h-12 w-12" />
              <p className=" text-lg "> Training & Mentorship </p>
              <p className=" text-center text-xs ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                excepturi est vitae sunt consectetur accusantium, amet nobis
                quae laudantium voluptates odio.
              </p>
            </div>

            <div className=" flex flex-col items-center gap-3 hover:bg-dtbi-orange/80 px-3 py-5 rounded-lg cursor-pointer ">
              <GoLaw className=" h-12 w-12" />
              <p className=" text-lg "> Legal Support </p>
              <p className=" text-center text-xs ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                excepturi est vitae sunt consectetur accusantium, amet nobis
                quae laudantium voluptates odio.
              </p>
            </div>

            <div className=" flex flex-col items-center gap-3 hover:bg-dtbi-orange/80 px-3 py-5 rounded-lg cursor-pointer ">
              <MdConnectWithoutContact className=" h-12 w-12" />
              <p className=" text-lg "> Networking </p>
              <p className=" text-center text-xs ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                excepturi est vitae sunt consectetur accusantium, amet nobis
                quae laudantium voluptates odio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
