import { useState } from 'react';
const ToDoFunction=()=>{
  const[tasks,setTasks]=useState([]);
  const[taskInput,setTaskInput]=useState('');
  const addTask=()=>{
    if(taskInput.trim()!==''){
      setTasks([...tasks,{text:taskInput,completed:false}]);
      setTaskInput('');
    }
  };
  const toggleTask=(index)=>{
    const updatedTasks=[...tasks];
    updatedTasks[index].completed=!updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const deleteTask=(index)=>{
    const updatedTasks=tasks.filter((_,i)=>i!==index);
    setTasks(updatedTasks);
  };
  return(
    <div style={styles.container}>
      <h1>React To-Do List</h1>
      <div>
        <input
        type="text"
        value={taskInput}
        onChange={(e)=>setTaskInput(e.target.value)}
        placeholder="Enter a task..."
        style={styles.input}
        />
        <button onClick={addTask}style={styles.addButton}>Add Task</button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task,index)=>(
          <li key={index}style={task.completed?styles.completedTask:styles.pendingTask}>
            <span onClick={()=>toggleTask(index)}style={{cursor:'pointer'}}>
              {index+1}.{task.completed?'✅':'❌'}{task.text}
            </span>
            <button onClick={()=>deleteTask(index)}style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    color: '#fff',
    fontSize: '36px',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    width: '250px',
    marginRight: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    outline: 'none',
    transition: 'border 0.3s',
  },
  addButton: {
    padding: '12px 25px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  },
  addButtonHover: {
    backgroundColor: '#0056b3',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
  },
  pendingTask: {
    padding: '15px',
    fontSize: '18px',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  completedTask: {
    padding: '15px',
    fontSize: '18px',
    textDecoration: 'line-through',
    color: 'gray',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#d9534f',
    transition: 'color 0.3s',
  },
  deleteButtonHover: {
    color: '#c12d23',
  },
};

export default ToDoFunction;