import { ProfilePage } from "pages/(profile)/index";
import { ProfileSettingsPage } from "pages/(profile)/settings";
import { IndexPage } from "pages/index";
import { TeamPage } from "pages/team";
import { Route, Routes } from "react-router-dom";
import PopupTable from "shared/ui/Popup/Popup";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route element={<TeamPage />} path="/team" />
      <Route element={<PopupTable />} path="/popup" />

      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<ProfileSettingsPage />} path="/profile/settings" />
    </Routes>
  );
};

export default App;
