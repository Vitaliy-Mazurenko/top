import { ProfilePage } from "pages/(profile)/index";
import { ProfileSettingsPage } from "pages/(profile)/settings";
import { DaschboardPage } from "pages/dashboard/ui/Daschboard/Daschboard";
import { IndexPage } from "pages/index";
import { TeamPage } from "pages/team";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route element={<TeamPage />} path="/team" />
     
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<ProfileSettingsPage />} path="/profile/settings" />
      <Route element={<DaschboardPage />} path="/" />
    </Routes>

  );
};

export default App;
