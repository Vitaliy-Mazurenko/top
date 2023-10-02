
import { ProfilePage } from "pages/profile";
import { TeamPage } from "pages/team";
import { ProfileSettingsPage } from "pages/ui/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<TeamPage />} path="/team" />
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<ProfileSettingsPage />} path="/profile/settings" />
    </Routes>
  )
}

export default App;
