import { NavigationMega } from "../../Components/Navigation/NavigationMega";
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Input, Textarea } from "@material-tailwind/react";
import FooterComponent from "../About/components/FooterComponent";
import { MdWorkHistory } from "react-icons/md";
import { TbMailbox } from "react-icons/tb";

export default function ContactPage() {
  return (
    <div>
      <NavigationMega />
      <div className="flex flex-col md:flex-row gap-10 mx-auto max-w-7xl md:my-16 px-2 ">
        <div className=" w-full">
          <div className=" text-center md:text-start ">
            <h1 className=" text-4xl font-medium ">
              {" "}
              Making Ideas come to life {" "}
            </h1>

            <h2 className=" text-sm text-gray-600 my-1 ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              ullam? Assumenda ratione doloribus voluptate, ad nam excepturi
              quibusdam fugiat. Itaque.{" "}
            </h2>
          </div>

          <div>
            <h1 className=" font-semibold "> Our Office </h1>
            <div className=" mt-1 mb-3 ">
              <img src="/images/offfice.png" className=" rounded " alt="" />
            </div>
          </div>

          <div className=" text-white bg-dtbi-blue rounded p-3 text-xs md:text-sm ">
            <div className=" flex flex-col md:flex-row  items-start justify-between gap-5 ">
              <div className=" flex gap-2 ">
                <span className=" py-1 ">
                  {" "}
                  <MdLocationPin className=" text-dtbi-orange" />{" "}
                </span>
                <div className=" flex flex-col gap-1 text-white ">
                  <span> Dar-es-Salaam, Tanzania </span>
                  <span> Ali Hassan Mwinyi </span>
                  <span> COSTECH building </span>
                </div>
              </div>

              <div className=" flex flex-col gap-1">
                <div className=" flex items-center gap-2 ">
                  <span>
                    {" "}
                    <IoCall className=" text-dtbi-orange " />{" "}
                  </span>
                  <span className=" text-white"> +255786549312 </span>
                </div>

                <div className=" flex items-center gap-2 ">
                  <span>
                    {" "}
                    <MdWorkHistory className=" text-dtbi-orange " />{" "}
                  </span>
                  <span className=" text-white">
                    {" "}
                    Monday-Friday (9:00 AM - 5:00 PM){" "}
                  </span>
                </div>

                <div className=" flex items-center gap-2 ">
                  <span>
                    {" "}
                    <TbMailbox className=" text-dtbi-orange " />{" "}
                  </span>
                  <span className=" text-white"> P.O. Box 4302 </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full   ">
          <form className=" p-8 mx-3 md:mx-0 flex flex-col gap-8 shadow-xl rounded ">
            <div>
              <header className=" text-2xl capitalize my-1 text-dtbi-blue font-medium ">
                {" "}
                Contact our friendly team{" "}
              </header>
              <p className=" text-sm text-gray-600">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                excepturi voluptate hic aliquid, dolorem ut perspiciatis ex!
                Veritatis illo quam exercitationem expedita necessitatibus!
              </p>
            </div>
            <div className=" flex flex-col md:flex-row gap-5  ">
              <Input variant="static" label="First Name" className=" w-full" />
              <Input variant="static" label="Last Name" className=" w-full" />
            </div>

            <div className=" flex ">
              <Input
                variant="static"
                label="Email"
                type="email"
                className=" w-full"
              />
            </div>

            <div className=" flex ">
              <Input
                variant="static"
                label="Phone Number"
                type="tel"
                className=" w-full"
              />
            </div>

            <div className=" flex flex-col gap-5  ">
              <Textarea variant="static" label="Message" className=" w-full" />
            </div>

            <button className=" btn bg-dtbi-orange text-white  ">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
