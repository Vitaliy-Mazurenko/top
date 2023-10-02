
import { TeamPage } from "pages/team";
import MainPage from "pages/ui/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  // const [isAddCandidateOpen, setIsAddCandidateOpen] = useState(false);

  // const openAddCandidate = () => {
  //   setIsAddCandidateOpen(true);
  // };

  // const closeAddCandidate = () => {
  //   setIsAddCandidateOpen(false);
  // };

  // return (
  //   <div>
  //     <button onClick={openAddCandidate}>Open Add Candidate</button>

  //     <AddCandidate isOpen={isAddCandidateOpen} onClose={closeAddCandidate} />
  //   </div>
  // );
 
  return (
    <Routes>
      <Route element={<h1>profile of any user</h1>} path="/home/profile/:userID"/>
      <Route element={<TeamPage />} path="/home/team/"/>
    </Routes>
  );
};

export default App;
