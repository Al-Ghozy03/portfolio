import { Route, Routes } from "react-router-dom";
import Project from "./Screens/Details";
import Home from "./Screens/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}
