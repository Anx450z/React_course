import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todo</h1>
      <Todo text='Learn React' />
      <Todo text='Make login using React' />
      <Todo text='Node js' />
    </div>
  );
}

export default App;
