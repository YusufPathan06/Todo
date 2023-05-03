import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("todo component is rendered", () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});

test("add, edit and delete todo", () => {
  render(<App />);

  const addTodo = screen.getByTestId("add-todo");
  fireEvent.change(addTodo, { target: { value: "yusuf" } });

  const addButton = screen.getByTestId("add-button");
  fireEvent.click(addButton);

  const editTodo = screen.getByTestId("edit-todo");
  fireEvent.change(editTodo, { target: { value: "Yusuf Pathan" } });

  const deleteButton = screen.getByTestId("delete-button");
  fireEvent.click(deleteButton);

  fireEvent.change(addTodo, { target: { value: "" } });
  fireEvent.click(addButton);
})
