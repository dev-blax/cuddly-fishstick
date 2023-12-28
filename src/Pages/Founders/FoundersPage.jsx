import FooterComponent from "../About/components/FooterComponent";
import Navigation from "../About/components/Navigation";

export default function FoundersPage() {
  return (
    <div>
      <Navigation />

      <div className=" my-5 ">
        <h2 className=" text-center my-5 text-3xl "> Meet Our Founders </h2>
        <div className=" flex justify-between gap-3 mx-auto lg:max-w-7xl  ">
          <div className=" md:w-1/4 ">
            <div className=" rounded-tl-3xl rounded-br-3xl overflow-hidden ">
              <img
                src="public\images\Founders\s_slider_img01.jpg"
                className=" h-64 "
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-dtbi-blue text-lg "> Founders Name </h2>
              <h4 className=" text-sm text-gray-500 "> Founder Position </h4>
            </div>
          </div>

          <div className=" md:w-1/4 ">
            <div className=" rounded-bl-3xl rounded-tr-3xl overflow-hidden ">
              <img
                src="public\images\Founders\s_slider_img02.jpg"
                className=" h-64 "
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-dtbi-blue text-lg "> Founders Name </h2>
              <h4 className=" text-sm text-gray-500 "> Founder Position </h4>
            </div>
          </div>

          <div className=" md:w-1/4 ">
            <div className=" rounded-tl-3xl rounded-br-3xl overflow-hidden ">
              <img
                src="public\images\Founders\s_slider_img03.jpg"
                className=" h-64 "
                alt=""
              />
            </div>
            <div>
              <h2 className=" text-dtbi-blue text-lg "> Founders Name </h2>
              <h4 className=" text-sm text-gray-500 "> Founder Position </h4>
            </div>
          </div>

          <div className=" md:w-1/4 ">
            <div className=" rounded-bl-3xl rounded-tr-3xl overflow-hidden ">
              <img
                src="public\images\Founders\s_slider_img04.jpg"
                className=" h-64 "
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

      <FooterComponent />
    </div>
  );
}
