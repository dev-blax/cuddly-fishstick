import { AiFillDingtalkCircle } from "react-icons/ai";
import { FaUser, FaGgCircle } from "react-icons/fa";
import { AiFillPayCircle, AiOutlineUser, AiFillBulb, AiFillChrome } from 'react-icons/ai'

export default function Strategy() {
  const partners = [
    {
      number: "38",
      desc: "Total Innovations",
    },
    {
      number: "33",
      desc: "Total Incubatees",
    },
    {
      number: "659",
      desc: "Direct Employment",
    },
    {
      number: "17000",
      desc: "Indirect Employment",
    },
  ];

  const iconMap = {
    "38": AiFillBulb,
    "33": AiOutlineUser,
    "659": AiFillChrome,
    "17000": FaGgCircle,
  };
  
  return (
    <div className="py-5 bg-dtbi-blue text-white">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between max-w-7xl mx-auto">
        {partners.map((partner, index) => {
          const IconComponent = iconMap[partner.number];

          return (
            <div key={index} className="flex items-center gap-1">
              {IconComponent && (
                <IconComponent className="text-dtbi-orange h-10 w-10 md:h-16 md:w-16" />
              )}
              <div>
                <h1 className="text-2xl font-bold"> {partner.number} + </h1>
                <h2 className="text-gray-500 text-sm"> {partner.desc} </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
