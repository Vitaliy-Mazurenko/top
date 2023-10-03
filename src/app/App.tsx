import { ProfilePage } from "pages/(profile)/index";
import { ProfileSettingsPage } from "pages/(profile)/settings";
import Daschboard from "pages/dashboard/ui/Daschboard/Daschboard";
import { TeamPage } from "pages/team";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<TeamPage />} path="/team" />
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<ProfileSettingsPage />} path="/profile/settings" />
      <Route element={<Daschboard />} path="/" />
    </Routes>

  );
};

export default App;
