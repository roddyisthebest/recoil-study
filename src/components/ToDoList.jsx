import { useRecoilState, useRecoilValue } from 'recoil';
import filteredToDoList from '../rst/FilteredToDoList';
import toDoListState from '../rst/ToDoListState';
import ToDoItem from './ToDoItem';
import ToDoItemCreator from './ToDoItemCreator';
import ToDoListFilters from './ToDoListFilters';
import TodoListStats from './ToDoListStats';
function ToDoList() {
  //   const toDoList = useRecoilState(toDoListState);
  const toDolist = useRecoilValue(filteredToDoList);
  return (
    <>
      <ToDoItemCreator></ToDoItemCreator>
      <ToDoListFilters></ToDoListFilters>
      <TodoListStats></TodoListStats>
      {toDolist.map((toDoItem) => (
        <ToDoItem key={toDoItem.id} item={toDoItem}></ToDoItem>
      ))}
    </>
  );
}

export default ToDoList;
