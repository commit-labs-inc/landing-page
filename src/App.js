import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SkillBuilders from "./SkillBuilders";
import Recruiters from "./Recruiters";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SkillBuilders />} />
          <Route path="/recruiters" element={<Recruiters />} />
          <Route path="*" element={<SkillBuilders />} />
        </Routes>
      </div>
    </Router>
  );
}
