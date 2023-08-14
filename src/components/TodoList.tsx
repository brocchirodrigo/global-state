import { useAppSelector } from "../store";

export function TodoList() {
  const store = useAppSelector((store) => {
    return store.todo;
  });

  return (
    <ul>
      {store.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
