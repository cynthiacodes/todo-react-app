import getErrorMessage from "../utils/getErrorMessage";
import { useState } from "react";
import axios from "axios";
import { TodoItem } from "./TodoTaskType";
import { apiBaseURL } from "../utils/apiBaseURL";
import { Button, Input } from "@chakra-ui/react";

export default function InputTodo() {
  const [todoInput, setTodoInput] = useState<string>("");

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const todoData: TodoItem = {
        description: todoInput,
        creationDate: new Date(),
        completed: false,
      };
      setTodoInput("");
      const response = await axios.post(apiBaseURL + "/todos", todoData);
      console.log("The following todo has been added", response.data);
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  };

  const handleTodoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <Input
          type="text"
          placeholder="write your todo here"
          value={todoInput}
          onChange={handleTodoInput}
          htmlSize={50}
          width="auto"
          variant="outline"
        />
        <Button colorScheme="pink">Add</Button>
      </form>
    </>
  );
}
