import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import toDoListState from '../rst/ToDoListState';

function ToDoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setToDoList = useSetRecoilState(toDoListState);

  const addItem = () => {
    setToDoList((prev) => [
      ...prev,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default ToDoItemCreator;

let id = 0;
function getId() {
  return id++;
}
