import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
      <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p>
      <div className="">
        <input
          name="todo"
          className="border-black "
          placeholder="Ajouter une tâche"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button onClick={addTodo} className="bg-[green] block cursor p-2 m-2">
          Ajoutter
        </button>
      </div>

      {todos?.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <div>
              <li key={index}> {todo}</li>
              <button className="bg-[red]">Delete</button>
            </div>
          ))}
        </ul>
        ) : (
          <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </div>
  );
}

export default App;
