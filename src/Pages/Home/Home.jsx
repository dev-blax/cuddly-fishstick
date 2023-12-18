import React from "react";
import { NavbarComponent } from "../../Components/NavbarComponent";
import { HeroComponent } from "../../Components/HeroComponent";
import IncubationStagesAndServices from "../../Components/IncubationStagesAndServices";
import StatisticsComponent from "../../Components/StatisticsComponent";
import "../../assets/css/home.css";
import SimpleSlider from "../../Components/SlideSection";
import MultipleItems from "../../Components/MultipleItems";
import { CardComponent } from "../../Components/CardComponent";
import SpringTest from "../../Components/SpringTest";
import FramerTest from "../../Components/FramerTest";

export default function HomePage() {
  return (
    <>
      {/* <NavbarComponent />

      <div className=" md:p-5 ">
        <HeroComponent />
      </div>
      <div className=" md:p-5 ">
        <MultipleItems />
      </div>
      <div className=" flex  md:p-5 ">
        <div className=" md:w-1/2 ">
          <img src="public/images/incubation_service.jpg" alt="" />
        </div>
        <div className=" md:w-1/2 p-5  rounded-xl ">
          <IncubationStagesAndServices />
        </div>
      </div>

      <div className="md:my-10">
        <h1 className=" text-center text-3xl mb-3"> Recent Posts </h1>
        <div className=" flex flex-col md:flex-row md:justify-around flex-wrap md:space-x-5  ">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div> */}

      <SpringTest />
      <FramerTest />

      {/* <div className="">
        <StatisticsComponent />
      </div> */}
    </>
  );
}
