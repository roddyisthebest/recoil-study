import { useRecoilState } from 'recoil';
import toDoListState from '../rst/ToDoListState';

function ToDoItem({ item }) {
  const [toDoList, setToDoList] = useRecoilState(toDoListState);
  const index = toDoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(toDoList, index, {
      ...item,
      text: value,
    });

    setToDoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(toDoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setToDoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(toDoList, index);

    setToDoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

export default ToDoItem;

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
