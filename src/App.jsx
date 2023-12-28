import { Route, Routes } from "react-router-dom";
//import Home from "./Pages/Home";
import About from "./Pages/About/About";
import FoundersPage from "./Pages/Founders/FoundersPage";
import BoardPage from "./Pages/Board/BoardPage";
import ManagementBoardComponent from "./Pages/Management/ManagementBoardComponent";
import Home from "./Pages/Home";
import IdeaApplication from "./Pages/Application/IdeaApplication";
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
      </Routes>
    </>
  );
}
