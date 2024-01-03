import { NavigationMega } from "../../Components/Navigation/NavigationMega";
import FooterComponent from "../About/components/FooterComponent";

import { IoCheckmarkDoneOutline } from "react-icons/io5";
export default function FoundersPage() {
  return (
    <div>
      <NavigationMega />

      <div className=" my-5 ">
        <h2 className=" text-center my-3 text-3xl "> Meet Our Founders </h2>
        <h2 className=" text-center my-3 text-sm text-gray-500 px-3 ">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
        </h2>
        <div className=" flex flex-col md:flex-row items-center justify-between gap-3 mx-auto lg:max-w-7xl  ">
          <div className=" md:w-full ">
            <div className="  overflow-hidden ">
              <img
                src="/images/Founders/s_slider_img01.jpg"
                className=" h-64 rounded-tl-3xl rounded-br-3xl"
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-dtbi-blue text-lg "> Founders Name </h2>
              <h4 className=" text-sm text-gray-500 "> Founder Position </h4>
            </div>
          </div>

          <div className=" md:w-full ">
            <div className="  overflow-hidden ">
              <img
                src="/images/Founders/s_slider_img02.jpg"
                className=" h-64 rounded-bl-3xl rounded-tr-3xl "
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-dtbi-blue text-lg "> Founders Name </h2>
              <h4 className=" text-sm text-gray-500 "> Founder Position </h4>
            </div>
          </div>

          <div className=" md:w-full ">
            <div className="  overflow-hidden ">
              <img
                src="/images/Founders/s_slider_img03.jpg"
                className=" h-64 rounded-tl-3xl rounded-br-3xl "
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-dtbi-blue text-lg "> Founders Name </h2>
              <h4 className=" text-sm text-gray-500 "> Founder Position </h4>
            </div>
          </div>

          <div className=" md:w-full ">
            <div className="  overflow-hidden ">
              <img
                src="/images/Founders/s_slider_img04.jpg"
                className=" h-64 rounded-bl-3xl rounded-tr-3xl "
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-dtbi-blue text-lg "> Founders Name </h2>
              <h4 className=" text-sm text-gray-500 "> Founder Position </h4>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-dtbi-blue text-white ">
        <div className=" flex md:items-center justify-between max-w-7xl mx-auto md:py-10 md:gap-10 ">
          <div className=" w-full flex flex-col ">
            <div>
              <h2 className=" text-xs px-4 py-2 rounded-full bg-dtbi-orange max-w-max ">
                {" "}
                Our Story{" "}
              </h2>
            </div>
            <div className=" my-3">
              <h3 className=" text-2xl capitalize ">
                {" "}
                The origin and deep rooted High Performance of DTBi{" "}
              </h3>
            </div>

            <p className=" text-sm text-gray-200 my-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              eos delectus quidem temporibus aliquid pariatur ipsum excepturi
              quis. Quaerat, delectus.
            </p>

            <ul className=" flex flex-col gap-2">
              <li className=" flex items-center gap-3 ">
                {" "}
                <IoCheckmarkDoneOutline className=" text-dtbi-orange " />{" "}
                <span className=" text-sm ">
                  {" "}
                  Maximum efficiency and optimum environment{" "}
                </span>{" "}
              </li>
              <li className=" flex items-center gap-3 ">
                {" "}
                <IoCheckmarkDoneOutline className=" text-dtbi-orange " />{" "}
                <span className=" text-sm ">
                  {" "}
                  Conducive Environment for Growing{" "}
                </span>{" "}
              </li>
              <li className=" flex items-center gap-3 ">  
                {" "}
                <IoCheckmarkDoneOutline className=" text-dtbi-orange " />{" "}
                <span className=" text-sm ">
                  {" "}
                  Latest Technology at the core{" "}
                </span>{" "}
              </li>
            </ul>

            <div className=" my-8 ">
              <a className=" px-4 py-2 bg-dtbi-orange text-white rounded-full max-w-max " href=""> Contact us </a>
            </div>
          </div>

          <div className=" w-full">
            <img src="/images/business-man.jpg" className=" rounded-2xl  " alt="" />
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
