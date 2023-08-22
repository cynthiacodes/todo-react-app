import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";

export default function MainTodo() {
  const myFn = () => {
    alert("myFn called!");
  };
  return (
    <>
      <h1>Get Things Done</h1>
      <InputTodo alertFn={myFn} />
      <ListTodo />
    </>
  );
}
