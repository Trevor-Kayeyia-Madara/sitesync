import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DailyLog from "./pages/DailyLog";
import PhotoCapture from "./pages/PhotoCapture";
import SubmitSuccess from "./pages/SubmitSuccess";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/daily-log" element={<DailyLog />} />
        <Route path="/photos" element={<PhotoCapture />} />
        <Route path="/success" element={<SubmitSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
