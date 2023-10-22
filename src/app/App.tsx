import { ProfilePage } from "pages/(profile)/index";
import { ProfileSettingsPage } from "pages/(profile)/settings";
import { DaschboardPage } from "pages/dashboard";
import { CalendarPage } from "pages/dashboard/calendar/ui";
import { ProjectItemPage } from "pages/personal/ProjectItemPage/ui";
import { TeamPage } from "pages/team";
import { PersonalPage } from "pages/personal";
import { Route, Routes } from "react-router-dom";
import PopupTable from "shared/ui/Popup/Popup";
import { ManagerLayout } from "widget/Layouts";
const App = () => {
  return (
    <Routes>
      <Route element={<DaschboardPage />} path="/dashboard" />
      <Route element={<CalendarPage />} path="/calendar" />

      <Route element={<PopupTable />} path="/popup" />
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<ProfileSettingsPage />} path="/profile/settings" />

      <Route element={<ManagerLayout />} path="/">
        <Route index element={<></>} />
        {/* <Route index element={<HomePage />} /> */}
        <Route element={<></>} path="profile_admin" />
        <Route element={<PersonalPage />} path="projects" />
        <Route element={<ProjectItemPage />} path="projects/:id" />
        <Route element={<></>} path="notifications" />
        <Route element={<TeamPage />} path="team" />
        <Route element={<></>} path="team/:id" />
      </Route>
    </Routes>
  );
};

export default App;
