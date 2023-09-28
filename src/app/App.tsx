// import { useState } from "react";
// import AddCandidate from "../pages/profile/ui/AddCandidate/AddCandidate";

// const App = () => {
//   const [isAddCandidateOpen, setIsAddCandidateOpen] = useState(false);

//   const openAddCandidate = () => {
//     setIsAddCandidateOpen(true);
//   };

//   const closeAddCandidate = () => {
//     setIsAddCandidateOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openAddCandidate}>Open Add Candidate</button>

//
//       <AddCandidate isOpen={isAddCandidateOpen} onClose={closeAddCandidate} />
//     </div>
//   );
// };

// export default App;
import Table from "../pages/profile/ui/Table/Table";
// import Main from "shared/ui/main/Main";
const App = () => {
  return (
    <div>
      <Table />
      {/* <Main /> */}
    </div>
  );
};

export default App;
