import './App.css';

const task = (array) => {
  return (
    array.map(task => <li>{task}</li>)
  );
}

const tasksArray = [
  'Estudar', 'Cuidar da filha', 'Tempo com a esposa', 'Assistir filme', 'Cortar cabelo'
];

function App() {
  return (
    <div className="container">
      <h1>List of Tasks</h1>
      {
        task(tasksArray)
      }
    </div>
  );
}

export default App;
