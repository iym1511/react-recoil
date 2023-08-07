import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../hooks/todoRecoil";

// 고유한 Id 생성을 위한 유틸리티
// let id = 0;

const TodoItemCreator = () => {

  const [todoItem, setTodoItem] = useState(
    {
      id: 0,
      text: '',
      isComplete: false
    }
  );

  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = (e) => {
    e.preventDefault();

    setTodoList((prev) => (
      [
        ...prev,
        todoItem
      ]
      ))
      setTodoItem((prev) => ( {...prev, id : prev.id + 1, text: ''}) );
    }

  const onChangeHandler = (e) => {
    setTodoItem((prev) => ({...prev, text: e.target.value}));
  }

  return (  
    <form onSubmit={addTodo}>
      <input type="text" value={todoItem.text} onChange={onChangeHandler}/>
      <button type="submit">작성</button>
    </form>
  );
}

export default TodoItemCreator;