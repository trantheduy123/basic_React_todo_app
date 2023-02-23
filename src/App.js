/* import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState, useCallback, useEffect } from "react";
import { v4 } from "uuid";
const TODO_APP_STORAGE_KEY = "TODO_APP";
function App() {
  const [todoList, settodoList] = useState([]); // array
  const [textInput, settextInput] = useState("");

  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      settodoList(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const ontextInputChange = useCallback((e) => {
    settextInput(e.target.value);
  }, []);
  const onAddBtnClick = useCallback(
    (e) => {
      // them text input vao danh sach todo list
      settodoList([
        { id: v4(), name: textInput, isCompleted: false },
        ...todoList,
      ]);

      settextInput("");
    },
    [todoList, textInput]
  );

  const onCheckBtnClick = useCallback((id) => {
    settodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  });

  return (
    //state ,props
    <>
      <h3>Day la danh sach can lam</h3>
      <Textfield
        name='add-todo'
        placeholder='Them viec can lam'
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance='primary'
            onClick={onAddBtnClick}
          >
            Them
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        onChange={ontextInputChange}
        value={textInput}
      ></Textfield>
      <TodoList onCheckBtnClick={onCheckBtnClick} todoList={todoList} />
    </>
  );
}

export default App;
 */

import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState, useEffect } from "react";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = "TODO_APP";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(
    (e) => {
      // them text input vao danh sach todoList
      setTodoList([
        { id: v4(), name: textInput, isCompleted: false },
        ...todoList,
      ]);

      setTextInput("");
    },
    [textInput, todoList]
  );

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);

  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name='add-todo'
        placeholder='Thêm việc cần làm...'
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance='primary'
            onClick={onAddBtnClick}
          >
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
}

export default App;
