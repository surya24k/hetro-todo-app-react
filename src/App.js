import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Modal, Row, Col, Table } from "react-bootstrap";

import TodoItem from "./TodoItem";
import FormAdd from "./FormAdd";
import { removeTodo } from "./redux/slice/todo";

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.list);

  const [show, setShow] = useState(false);
  const [deleteTodoId, setDeleteTodoId] = useState(null); 

  const handleClickRemove = (todoId) => {
    setShow(true);
    setDeleteTodoId(todoId); 
  };

  const handleRemove = () => {
    if (deleteTodoId !== null) {
      dispatch(removeTodo({ id: deleteTodoId }));
      setShow(false);
    }
  };

  return (
    <div className="App">
      <Container>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton >
            <Modal.Title>Remove Todo?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to delete it?</Modal.Body>
          <Modal.Footer>
            <Container>
              <Row className="justify-content-center">
                <Col xs="auto">
                  <Button type="cancel" className="cancel-btn" onClick={() => setShow(false)}>
                    Close
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button type="ok" className="ok-btn" onClick={handleRemove}>
                    OK
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Footer>

        </Modal>
        <FormAdd />
        <h1 className="title">Todo App</h1>
        <Table striped hover bordered style={{ textAlign: "center", verticalAlign: "middle" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList &&
              todoList.map((todo) => {
                return (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    isDone={todo.isDone}
                    createdAt={todo.createdAt}
                    updatedAt={todo.updatedAt}
                    onClickRemove={handleClickRemove}
                  />
                );
              })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
