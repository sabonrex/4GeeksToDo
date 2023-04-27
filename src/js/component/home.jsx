import React, {useState} from "react";


const Home = () => {
  const [input, setInput] = useState(""); 
  const [tareas, setTareas] = useState([]); 

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <ul>
        <li>
        
        <input
  type="text"
  onChange={(e) => setInput(e.target.value)} 
  value={input} 
  onKeyPress={(e) => {
    if (e.key === "Enter" && input.length >= 3) { 
      setTareas(tareas.concat(input));
      setInput(""); 
    }
  }}
  placeholder="Add your to-do"
/>

        </li>
        {tareas.map((tarea, index) => ( 
          <li>
            <span>{tarea}</span> 
            <i
              className="fa-solid fa-xmark"
              onClick={() =>
                setTareas(
                  tareas.filter((tarea, currentIndex) => index != currentIndex)
                )
              } 

            ></i>
          </li>
        ))}
      </ul>

      <div>
       {tareas.length} {tareas.length >=2 ? "tareas" : "tarea"} </div> 
    </div>
  );
};

export default Home;