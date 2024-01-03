import { NavigationMega } from "../../Components/Navigation/NavigationMega";

export default function BoardPage() {
  return (
    <div>
      <NavigationMega />

      <div className=" my-5">
        <h2 className=" text-center text-2xl "> The Board Members </h2>
        <p className=" md:max-w-lg mx-auto text-center text-gray-500 text-sm ">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          dolorum voluptates error nobis tempora, similique itaque molestiae ad
          doloremque, minima labore.
        </p>
        <div className=" flex gap-5 flex-wrap md:max-w-7xl mx-auto my-5 justify-center ">
          <div className=" md:w-1/4 flex flex-col items-center ">
            <img
              src="public\images\Founders\s_slider_img01.jpg"
              className=" h-20 rounded-full"
              alt=""
            />
            <div className=" text-center ">
              <h2> Hon. Nape Nnauye </h2>
              <h4 className=" text-sm text-gray-400  "> ICT Minister </h4>
            </div>
          </div>

          <div className=" md:w-1/4 flex flex-col items-center ">
            <img
              src="public\images\Founders\s_slider_img03.jpg"
              className=" h-20 rounded-full"
              alt=""
            />
            <div className=" text-center ">
              <h2> Hon. Jumanne Mtambalike </h2>
              <h4 className=" text-sm text-gray-400  ">
                {" "}
                Sahara Ventures Director{" "}
              </h4>
            </div>
          </div>

          <div className=" md:w-1/4 flex flex-col items-center ">
            <img
              src="public\images\Founders\s_slider_img05.jpg"
              className=" h-20 rounded-full"
              alt=""
            />
            <div className=" text-center ">
              <h2> Prof. Leonard Mselle </h2>
              <h4 className=" text-sm text-gray-400  ">
                {" "}
                Head of ICT Commissin Board{" "}
              </h4>
            </div>
          </div>

          <div className=" md:w-1/4 flex flex-col items-center ">
            <img
              src="public\images\Founders\s_slider_img02.jpg"
              className=" h-20 rounded-full"
              alt=""
            />
            <div className=" text-center ">
              <h2> Hon. Nape Nnauye </h2>
              <h4 className=" text-sm text-gray-400  "> ICT Minister </h4>
            </div>
          </div>

          <div className=" md:w-1/4 flex flex-col items-center ">
            <img
              src="public\images\Founders\s_slider_img04.jpg"
              className=" h-20 rounded-full"
              alt=""
            />
            <div className=" text-center ">
              <h2> Hon. Nape Nnauye </h2>
              <h4 className=" text-sm text-gray-400  "> ICT Minister </h4>
            </div>
          </div>

          <div className=" md:w-1/4 flex flex-col items-center ">
            <img
              src="public\images\Founders\s_slider_img03.jpg"
              className=" h-20 rounded-full"
              alt=""
            />
            <div className=" text-center ">
              <h2> Hon. Nape Nnauye </h2>
              <h4 className=" text-sm text-gray-400  "> ICT Minister </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
