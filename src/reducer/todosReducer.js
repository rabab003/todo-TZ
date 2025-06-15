import { v4 as idNumb } from "uuid";

export default function reducer(currentTodos, action) {
  switch (action.type) {
    case "added": {
      const newTodo = {
        id: idNumb(),
        title: action.payload.newTitle,
        details: "",
        isCompleted: false,
      };

      const updateTodos = [...currentTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updateTodos));
      return updateTodos;
    }

    default: {
      throw Error("unknown Action" + action.type);
    }
  }
  //   return [];
}
