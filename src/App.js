import './App.css';
import ListaTareas from './componentes/ListaTareas';
import Logo from './componentes/Logo';


function App() {
  return (
    <div className="App">
      <Logo/>
      <div className='contenedor-principal'>
        <div className='contenedor-titulo'>Mis tareas</div>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
