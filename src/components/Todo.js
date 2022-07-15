import {useState} from "react";
import Modal from "./Model";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [ modelIsOpen, setModalIsOpen ] = useState(false); //React hook with initial value

  function deleteTodo() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteTodo}>Delete</button>
      </div>
      { modelIsOpen ? <Modal onCancel={closeModal} onConfirm={closeModal} /> : null}
      { modelIsOpen ? <Backdrop onCancel={closeModal}/> : null}
    </div>
  );
}

export default Todo;
