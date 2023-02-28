import { useRecoilState } from 'recoil';
import toDoListState from '../rst/ToDoListState';
import ToDoItem from './ToDoItem';
function ToDoList() {
  const toDoList = useRecoilState(toDoListState);

  return (
    <>
      {toDoList.map((toDoItem) => (
        <ToDoItem key={toDoItem.id} item={toDoItem}></ToDoItem>
      ))}
    </>
  );
}

export default ToDoList;
