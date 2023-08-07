import { useRecoilValue } from "recoil";
import { filteredTodoListState, todoListState } from "../hooks/todoRecoil";
import TodoItem from "../components/TodoItem";
import TodoItemCreator from "../components/TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = () => {

  const todoList = useRecoilValue(filteredTodoListState);

  return (  
    <div>
      <h1>TodoList</h1>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator/>
      {todoList.map((a,i) => (
        <TodoItem key={i} item={a}/>
      ))}
    </div>
  );
}

export default TodoList;