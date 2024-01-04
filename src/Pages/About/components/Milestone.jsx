import { useState } from "react";
import "../About.css";

export default function Milestone() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  let basebtnClass = " btn ";
  const startups = [
    {
      name: "Sarufi Ai",
      category: "graduated",
      logoUrl: "/images/startup-logos/sarufi.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rem laudantium similique sed alias tenetur minus quaerat quibusdam perspiciatis ex.",
    },
    {
      name: "Smart Darasa",
      category: "current",
      logoUrl: "/images/startup-logos/smartdarasa_logo.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rem laudantium similique sed alias tenetur minus quaerat quibusdam perspiciatis ex.",
    },
    {
      name: "Azam Pay",
      category: "current",
      logoUrl: "/images/startup-logos/azam-pay.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rem laudantium similique sed alias tenetur minus quaerat quibusdam perspiciatis ex.",
    },
    {
      name: "Kiasi",
      category: "graduated",
      logoUrl: "/images/startup-logos/kiasi.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rem laudantium similique sed alias tenetur minus quaerat quibusdam perspiciatis ex.",
    },
    {
      name: "TUNZAA",
      category: "graduated",
      logoUrl: "/images/startup-logos/tunzaa.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rem laudantium similique sed alias tenetur minus quaerat quibusdam perspiciatis ex.",
    },
    {
      name: "SIDA",
      category: "current",
      logoUrl: "/images/startup-logos/sida.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rem laudantium similique sed alias tenetur minus quaerat quibusdam perspiciatis ex.",
    },
    {
      name: "Sahara Sparks",
      category: "current",
      logoUrl: "/images/startup-logos/sahara-sparks.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rem laudantium similique sed alias tenetur minus quaerat quibusdam perspiciatis ex.",
    },
    {
      name: "Dawa Mkononi",
      category: "current",
      logoUrl: "/images/startup-logos/dawa-mkononi.svg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi rem laudantium similique sed alias tenetur minus quaerat quibusdam perspiciatis ex.",
    },
  ];

  const filteredStartups =
    selectedCategory === "all"
      ? startups
      : startups.filter((startups) => startups.category === selectedCategory);

  return (
    <div className=" py-10  ">
      <header className=" text-center md:text-3xl ">
        {" "}
        Our Incubation Milestones{" "}
      </header>
      <div className=" mx-auto flex items-center justify-center gap-3 px-3 text-xs  ">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`${basebtnClass} ${
            selectedCategory === "all" ? "bg-dtbi-blue text-white" : ""
          } `}
        >
          {" "}
          All{" "}
        </button>
        <button
          onClick={() => setSelectedCategory("current")}
          className={`${basebtnClass} ${
            selectedCategory === "current" ? "bg-dtbi-blue text-white" : ""
          } `}
        >
          {" "}
          Current Startups{" "}
        </button>
        <button
          onClick={() => setSelectedCategory("graduated")}
          className={`${basebtnClass} ${
            selectedCategory === "graduated" ? "bg-dtbi-blue text-white" : ""
          }`}
        >
          {" "}
          Graduated Startups{" "}
        </button>
      </div>

      <div className=" flex flex-wrap justify-between lg:max-w-7xl mx-auto lg:gap-8 text-center my-5 px-3 gap-3 ">
        {filteredStartups.map((startup, index) => (
          <div
            key={index}
            className=" cursor-pointer lg:w-1/5 module-border-wrap  rounded-2xl relative bg-gray-300 hover:bg-gradient-to-br from-dtbi-orange to-dtbi-blue p-[2px] "
          >
            <div className="  flex flex-col items-center justify-center aspect-square bg-gray-300 text-gray-900 p-4 rounded-2xl ">
              <img src={startup.logoUrl} className=" h-10 my-3 rounded-lg " alt="" />
              <p className=" text-2xl "> {startup.name} </p>
              <p className=" text-xs font-light my-2 ">
                {" "}
                {startup.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
