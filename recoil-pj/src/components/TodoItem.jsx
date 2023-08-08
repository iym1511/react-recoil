import { useRecoilState } from "recoil";
import { todoListState } from "../hooks/todoRecoil";
import { useState } from "react";

function replaceItemAtIndex(arr, index, newValue) {
  console.log([...arr.slice(index + 1)])
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [recomment, setRecomment] = useState(false);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };
  
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  const recommentHandler = () => {
    setRecomment((prev) => !prev);
  }

  return (
    <div>
      <span>{item.id}. </span>
      { recomment ? 
        <input type="text" value={item.text} onChange={editItemText} /> 
        : 
        <span>{item.text}</span>
      }
      
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={recommentHandler}>수정</button>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
