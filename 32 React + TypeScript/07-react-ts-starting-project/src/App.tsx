import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './components/todos-context';

function App() {
   return (
      <TodosContextProvider>
         <NewTodo />
         <Todos />
      </TodosContextProvider>
   );
}

export default App;
