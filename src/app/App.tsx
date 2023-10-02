import Daschboard from "pages/dashboard/ui/Daschboard/Daschboard";

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
    <div>
      {/* <h1>Hello World</h1> */}
      {/* <Table /> Використовуйте компонент Table тут */}
      <Daschboard />
    </div>
  );
};

export default App;
