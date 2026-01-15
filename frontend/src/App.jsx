import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DailyLog from "./pages/DailyLog";
import PhotoCapture from "./pages/PhotoCapture";
import SubmitSuccess from "./pages/SubmitSuccess";
import Dashboard from "./pages/Dashboard";
import DailyReport from "./pages/DailyReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/daily-log" element={<DailyLog />} />
        <Route path="/photos" element={<PhotoCapture />} />
        <Route path="/success" element={<SubmitSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<DailyReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
