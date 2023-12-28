import { NavigationMega } from "../Components/Navigation/NavigationMega";
import Partners from "../Components/Partners/Partners";
import FooterComponent from "./About/components/FooterComponent";
import Hero from "./About/components/Hero";
import Milestone from "./About/components/Milestone";
import Service from "./About/components/Service";
import Strategy from "./About/components/Strategy";

export default function Home() {
  return (
    <div>
      <NavigationMega />
      <Hero />

      <Service />

      <Milestone />

      <Strategy />

      <Partners />

      <FooterComponent />

    </div>
  );
}
