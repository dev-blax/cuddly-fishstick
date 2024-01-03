import { BsTwitter, BsGitlab, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <div className=" pt-5 md:pt-10 ">
      <div className="  px-5  flex flex-col md:flex-row pb-5 md:pb-0 justify-between gap-3 max-w-7xl mx-auto ">
        <div className=" flex flex-col md:w-1/4  ">
          <div className=" my-3">
            <img src="\logo\logo.png" className=" h-10 " alt="" />
          </div>
          <p className=" text-xs ">
            {" "}
            Supporting Growth and Commercialization of Emerging Digital-Based
            Start-ups in Tanzania.{" "}
          </p>
        </div>
        <div className=" flex flex-col md:w-1/4 ">
          <h2 className=" text-2xl font-semibold "> Our Institution </h2>
          <ul>
            <li className=" my-3 ">
              {" "}
              <a href="" className=" px-4 py-2 hover:bg-black/20 rounded-lg ">
                {" "}
                About Dtbi{" "}
              </a>{" "}
            </li>
            <li className=" my-3 ">
              {" "}
              <a href="" className=" px-4 py-2 hover:bg-black/20 rounded-lg ">
                {" "}
                Our Board{" "}
              </a>{" "}
            </li>
            <li className=" my-3 ">
              {" "}
              <a href="" className=" px-4 py-2 hover:bg-black/20 rounded-lg ">
                {" "}
                Our Founders{" "}
              </a>{" "}
            </li>
            <li className=" my-3 ">
              {" "}
              <a href="" className=" px-4 py-2 hover:bg-black/20 rounded-lg ">
                {" "}
                Our Management{" "}
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className=" flex flex-col md:w-1/4 ">
          <h2 className=" text-2xl font-semibold "> Our Programs </h2>

          <ul>
            <li className=" my-3 ">
              {" "}
              <a href="" className=" px-4 py-2 hover:bg-red-500 hover:text-white rounded-lg ">
                {" "}
                FursaLab{" "}
              </a>{" "}
            </li>
            <li className=" my-3 ">
              {" "}
              <Link to={'https://ims-dtbi.web.app/'} href="" className=" px-4 py-2 hover:bg-black/10 rounded-lg ">
                {" "}
                DTBI iMS{" "}
              </Link>{" "}
            </li>
            
          </ul>
        </div>
        <div className=" flex flex-col md:w-1/4 ">
          <h2 className=" text-sm "> Subscribe to Our newsletter </h2>
          <form action="" className=" flex flex-col">
            <input
              type="email"
              className=" p-2 bg-gray-200 rounded-lg active:ring-dtbi-orange active:ring-1 "
            />
            <div>
              <button className=" btn mt-2 bg-dtbi-orange text-white ">
                {" "}
                Subscribe{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" bg-dtbi-blue text-white ">
        <div className="max-w-7xl mx-auto py-3 flex flex-col md:flex-row gap-3 px-5 text-xs md:text-base justify-between ">
          <p> &copy; DTBi: All rules and regulations to be athered </p>
          <div className=" flex gap-3 ">
            <a href="">
              {" "}
              <BsTwitter />{" "}
            </a>
            <a href="">
              {" "}
              <BsGitlab />
            </a>
            <a href="">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
