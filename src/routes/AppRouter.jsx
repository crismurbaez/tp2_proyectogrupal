import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Bitacora from "../pages/Bitacora";
import MemberProfile from "../pages/MemberProfile";
import Explorer from "../pages/Explorer";
import ApiPage from "../pages/ApiPage";
import Galley from "../pages/Gallery";
import RenderTree from "../pages/RenderTree";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        /* Layout principal */
        <Route element={<MainLayout />}>
          {/* Home */}
          <Route index element={<Home />} />
          {/* Perfil dinámico */}
          <Route path="member/:id" element={<MemberProfile />} />
          {/* Explorador */}
          <Route path="explorer" element={<Explorer />} />
          {/* API */}
          <Route path="api" element={<ApiPage />} />
          {/* Gallery */}
          <Route path="gallery" element={<Galley />} />
          {/* Render Tree */}
          <Route path="render-tree" element={<RenderTree />} />
          {/* Bitácora */}
          <Route path="/bitacora" element={<Bitacora />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;