import { Route, Routes } from "react-router-dom";
//import Home from "./Pages/Home";
import About from "./Pages/About/About";
import FoundersPage from "./Pages/Founders/FoundersPage";
import BoardPage from "./Pages/Board/BoardPage";
import ManagementBoardComponent from "./Pages/Management/ManagementBoardComponent";
import Home from "./Pages/Home";
import IdeaApplication from "./Pages/Application/IdeaApplication";
import ContactPage from "./Pages/Contact/ContactPage";
import StartupApplication from "./Pages/Application/StartupApplication";
import IncubationLayout from "./Pages/Incubation/IncubationLayout";
import CurrentStartups from "./Pages/Startups/CurrentStartups";
import GraduatedStartups from "./Pages/Startups/GraduatedStartups";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founders" element={<FoundersPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/management" element={<ManagementBoardComponent />} />

        <Route path="/application" element={<IdeaApplication />} />

        <Route path="/company-application" element={<StartupApplication />} />
        <Route path="/startup-application" element={<StartupApplication />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/incubation/apply" element={<IdeaApplication />} />
        <Route path="/incubation/:page" element={<IncubationLayout />} />

        <Route path="/startups/current" element={<CurrentStartups />} />
        <Route path="/startups/graduates" element={<GraduatedStartups />} />
        
      </Routes>
    </>
  );
}
