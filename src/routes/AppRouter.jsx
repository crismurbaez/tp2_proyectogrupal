import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Bitacora from "../pages/Bitacora";
import MemberProfile from "../pages/MemberProfile";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        /* Layout principal */
        <Route element={<MainLayout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* Bitácora */}
          <Route path="/bitacora" element={<Bitacora />} />
          {/* Perfil dinámico */}
          <Route path="/member/:id" element={<MemberProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;