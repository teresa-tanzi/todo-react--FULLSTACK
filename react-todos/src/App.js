// In order to import the ability for each component to handle state
// we need to import React
// useState is something that returns a stateful value and a function 
// to update that stateful value
import React, {useState} from 'react'
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

// We create components as functions which return a div to render
// React used JSX (JavaScript XML) which is a wrapper for HTML
function App() {
  // State needs to be changed in orer to rerender the view
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  // Array of todos to display in the todo table
  // useState returns two variables in an array:
  // the 1st is the one that uses the state
  // the 2nd is a funtion setting that state
  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One'},
    {rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One'},
  ])

  const addTodo = (description, assigned) => {
    // We are using the row number as a unique identifier
    // If we simply increase it, once we delete and item this number might not be unique anymore
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber, 
      rowDescription: description, 
      rowAssigned: assigned
    };
    // We need to use setTodos to rerender the element: we wanna pass all the 
    // elements to render (all the todos and the new one)
    // ... destructures the given array
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });

    setTodos(filtered);
  }

	return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
        {showAddTodoForm &&
          <NewTodoForm addTodo={addTodo}/>
        }
        </div>
      </div>
    </div>
 	);
}

export default App;
