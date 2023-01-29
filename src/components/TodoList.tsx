import React from "react";
import { Todo } from "../modal";
interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div className="flex flex-col w-6/12 flex-wrap ">
      {props.todos.map((todo) => (
        <li className="border text-center list-none text-2xl text-white rounded-2xl m-4 p-4">{todo.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
