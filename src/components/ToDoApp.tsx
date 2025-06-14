import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const ToDoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>(""); // Especificamos q es string
  const [listaTareas, setListaTareas] = useState<string[]>([]); // Especificamos q es un array de string

  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
    setNuevaTarea(""); // borramos la data del input
  };

  const handleBorrarTarea = (index: number) => {
    setListaTareas((tareas) => tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaTareas
        listaTareas={listaTareas}
        borrarTarea={handleBorrarTarea}
      ></ListaTareas>
    </div>
  );
};
