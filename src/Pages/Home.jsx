import { HeroComponent } from "../Components/HeroComponent";
import IncubationStagesAndServices from "../Components/IncubationStagesAndServices";
import { NavbarComponent } from "../Components/NavbarComponent/NavbarComponent";

export default function Home() {
  return (
    <div>
      <NavbarComponent />

      <HeroComponent />

      <div className=" flex lg:max-w-6xl mx-auto my-5 ">
        <div className=" w-1/2 ">
          <img src="public/images/incubation_service.jpg" alt="" />
        </div>

        <div>
          <IncubationStagesAndServices />
        </div>
      </div>

      {/* <div className=" lg:max-w-6xl mx-auto my-5 ">
      <MilestonesComponent />
      </div> */}



    </div>
  );
}
