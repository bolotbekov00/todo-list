import React, { useState } from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  editTodo,
  deleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleEdit();
          }}
        />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};
