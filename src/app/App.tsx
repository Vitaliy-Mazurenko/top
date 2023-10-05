import { ProfilePage } from "pages/(profile)/index";
import { ProfileSettingsPage } from "pages/(profile)/settings";
import { DaschboardPage } from "pages/dashboard/ui/Daschboard/Daschboard";
import { TeamPage } from "pages/team";
import { Route, Routes } from "react-router-dom";
import { IndexPage } from "pages/index";

const App = () => {
  return (
    <Routes>
      <Route element={<DaschboardPage />} path="/" />
      <Route element={<IndexPage />} path="/test" />
      

      <Route element={<TeamPage />} path="/team" />

      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<ProfileSettingsPage />} path="/profile/settings" />
    </Routes>

  )
}

export default App;
