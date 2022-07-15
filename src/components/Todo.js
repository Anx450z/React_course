import {useState} from "react";
import Modal from "./Model";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [ modelIsOpen, setModalIsOpen ] = useState(false); //React hook with initial value

  function deleteTodo() {
    setModalIsOpen(true);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteTodo}>Delete</button>
      </div>
      { modelIsOpen ? <Modal/> : null}
      { modelIsOpen ? <Backdrop/> : null}
    </div>
  );
}

export default Todo;
