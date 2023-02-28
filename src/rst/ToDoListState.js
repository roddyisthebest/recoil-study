import { atom } from 'recoil';

const toDoListState = atom({
  key: 'todoListState',
  default: [],
});

export default toDoListState;
