import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Bitacora from "../pages/Bitacora";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bitacora" element={<Bitacora />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;