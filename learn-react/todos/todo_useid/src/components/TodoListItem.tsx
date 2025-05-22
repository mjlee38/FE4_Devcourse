import { ActionDispatch, useId } from "react";
import { twMerge } from "tailwind-merge";

export default function TodoListItem({
  todo,
  dispatch,
}: {
  todo: TodoItem;
  dispatch: ActionDispatch<[action: TodoReducerAction]>;
}) {
  const uuid = useId();

  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
      <div className="flex items-center">
        <input
          id={uuid}
          type="checkbox"
          className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
          checked={todo.done}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
        />
        <label htmlFor={uuid} className={twMerge(todo.done && "line-through")}>
          {todo.text}
        </label>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      >
        Delete
      </button>
    </li>
  );
}
