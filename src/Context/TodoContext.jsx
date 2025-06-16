import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/todosReducer";

const TodosContext = createContext([]);

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <TodosContext.Provider value={{ todos: todos, dispatch: dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;

export const useTodos = () => {
  return useContext(TodosContext);
};
