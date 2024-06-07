import React from "react";
import { Todo } from "../types";
import { TodoItem } from "./TodoItems";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  editTodo,
  deleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
