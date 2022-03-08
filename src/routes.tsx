import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Phrase } from "./pages/Phrase";

export function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Header />
      <Routes>
        <Route path="/phrase" element={<Phrase />} />
      </Routes>
    </BrowserRouter>
  );
}
