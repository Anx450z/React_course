import Modal from "./components/Model";
import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todo</h1>
      <Todo text='Learn React' />
      <Todo text='Make login using React' />
      <Todo text='Node js' />
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
