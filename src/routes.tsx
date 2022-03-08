import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Phrase } from "./pages/Phrase";
import { UseGlobalContext } from "./context/useGlobalContext";

export function CustomRoutes() {
  return (
    <BrowserRouter>
      <UseGlobalContext>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Header />
        <Routes>
          <Route path="/phrase" element={<Phrase />} />
        </Routes>
      </UseGlobalContext>
    </BrowserRouter>
  );
}
