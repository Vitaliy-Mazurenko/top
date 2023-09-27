import Table from "../pages/profile/ui/Table/Table"; // Шлях до вашого компонента Table
import Main from 'shared/ui/main/Main';
const App = () => {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Table /> {/* Використовуйте компонент Table тут */}
      <Main />
    </div>
  );
};


export default App;
