import { useParams } from "react-router-dom";
import Incubation_Overview from "./Incubation_Overview";

export default function IncubationLayout() {
  const { page } = useParams();

  if (page == "overview") {
    return <Incubation_Overview />;
  } else
    return (
      <div className=" h-screen bg-dtbi-blue text-white ">Another Page</div>
    );
}
