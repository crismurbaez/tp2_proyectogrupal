import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Bitacora from "../pages/Bitacora";
import MembersProfiles from "../pages/MembersProfiles";
import Explorer from "../pages/Explorer";
import ApiPage from "../pages/ApiPage";
import RenderTree from "../pages/RenderTree";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        /* Layout principal */
        <Route element={<MainLayout />}>
          {/* Home */}
          <Route index element={<Home />} />
          {/* Bitácora */}
          <Route path="/bitacora" element={<Bitacora />} />
          {/* Nosotros */}
          <Route path="member/:id" element={<MembersProfiles />} />
          {/* Explorador JSON*/}
          <Route path="explorer" element={<Explorer />} />
          {/* Explorador API */}
          <Route path="api" element={<ApiPage />} />
          {/* Render Tree */}
          <Route path="render-tree" element={<RenderTree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;