import { NavigationMega } from "../../Components/Navigation/NavigationMega";
import FooterComponent from "../About/components/FooterComponent";
import ApplyCard from "./ApplyCard";
import { applicationCardData } from "../../constants/application_cards_data";

export default function ApplyPage() {
  return (
    <div>
      <NavigationMega />
      <div className="flex flex-col items-center lg:max-w-7xl mx-auto justify-between md:my-10 py-10 ">
        <div className=" mb-5 flex flex-col items-center">
          <h2 className=" font-semibold text-2xl ">
            {" "}
            Our Incubation Programs{" "}
          </h2>
          <h3 className=" text-gray-500 text-sm ">
            {" "}
            Apply as per your requirements{" "}
          </h3>
        </div>
        <div className=" flex flex-col md:flex-row gap-10  justify-between w-full ">
          {applicationCardData.map((card, index) => (
            <ApplyCard
              key={index}
              label={card.label}
              description={card.description}
              imageString={card.imageString}
              href={card.href}
            />
          ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
