// 1. IMPORTAMOS LA MEMORIA: React necesita 'useState' para recordar datos que cambian
import { useState } from 'react';
import './App.css';

function App() {
  
  // ==========================================
  // 🧠 ZONA DE MEMORIA (ESTADOS)
  // ==========================================
  
  // Memoria 1: Lo que el usuario escribe en el input AHORA MISMO.
  // Empieza como un texto vacío "".
  const [textoInput, setTextoInput] = useState("");
  
  // Memoria 2: La lista oficial de tareas guardadas.
  // Empieza como un Array vacío [].
  const [listaTareas, setListaTareas] = useState([]);


  // ==========================================
  // ⚙️ ZONA DE LÓGICA (ACCIONES)
  // ==========================================
  
  // Esta función se dispara cuando hacemos clic en el botón
  const manejarClick = () => {
    // Seguridad: Si el input está vacío o solo tiene espacios, no hacemos nada
    if (textoInput.trim() === "") return;

    // MAGIA REACT: Cogemos la lista vieja (...listaTareas) y le pegamos el texto nuevo al final
    setListaTareas([...listaTareas, textoInput]);

    // Limpiamos el input dejándolo vacío para la siguiente tarea
    setTextoInput(""); 
  };


  // ==========================================
  // 🎨 ZONA VISUAL (LO QUE VE EL USUARIO)
  // ==========================================
  return (
    <main className="contenedor-app">
      <h1>Entrenamiento: La Memoria</h1>
      
      {/* --- ZONA DE ENTRADA DE DATOS --- */}
      <div className="caja-formulario">
        <input 
          type="text" 
          placeholder="Escribe una tarea..."
          value={textoInput} // Conectamos el input a la Memoria 1
          onChange={(e) => setTextoInput(e.target.value)} // Cada pulsación de tecla actualiza la memoria
        />
        <button onClick={manejarClick}>Añadir Tarea</button>
      </div>

      {/* --- ZONA DE SALIDA (LA IMPRESORA) --- */}
      <ul className="caja-lista">
        {/* Si la lista está vacía, mostramos un mensaje amistoso */}
        {listaTareas.length === 0 ? (
          <p className="mensaje-vacio">No hay tareas. ¡Añade una!</p>
        ) : (
          // Usamos .map() para fabricar un <li> por cada tarea guardada en el Array
          listaTareas.map((tarea, indice) => (
            <li key={indice} className="tarea-item">
              {tarea}
            </li>
          ))
        )}
      </ul>

    </main>
  );
}

export default App;