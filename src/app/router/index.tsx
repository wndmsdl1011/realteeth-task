import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import DetailPage from "@/pages/detail";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}