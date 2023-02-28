import { selector } from 'recoil';
import todoListFilterState from './ToDoListFilterState';
import toDoListState from './ToDoListState';

const filteredToDoList = selector({
  key: 'filteredToDoList',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(toDoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default filteredToDoList;
