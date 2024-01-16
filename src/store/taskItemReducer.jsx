const taskItemReducer = (currentTaskItem, action) => {
  let newTaskItems = currentTaskItem;
  if (action.type === "NEW_ITEM") {
    newTaskItems = [
      ...currentTaskItem,
      {
        task: action.payload.item,
        date: action.payload.date,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTaskItems = currentTaskItem.filter((tasks, index) => {
      return index !== action.payload.id;
    });
  }
  return newTaskItems;
};
export default taskItemReducer;
