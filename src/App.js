import './App.css';
import TodoTitle from './TodoTitle';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
//import TodoBtnCreate from './TodoBtnCreate';


function App() {
  return (
    <div className="App">
      <TodoTitle/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      {/* <TodoBtnCreate/> */}
    </div>
  );
}



export default App;
