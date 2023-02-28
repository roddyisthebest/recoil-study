import { RecoilRoot } from 'recoil';
import ToDoList from './components/ToDoList';
function App() {
  return (
    <RecoilRoot>
      <ToDoList></ToDoList>
    </RecoilRoot>
  );
}

export default App;
