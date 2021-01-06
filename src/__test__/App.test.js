import App from "../App";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../components/redux/store";
import userEvent from "@testing-library/user-event";
beforeAll(() =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
);
afterAll(() => cleanup);
test("Testing to <App /> component", async () => {
  const navbar = screen.getByTestId("navbar");
  const inputTask = screen.getByTestId("inputTask");
  const botonSave = screen.getByTestId("boton");
  const emptyMessage = screen.queryByTestId("empty-message");
  const list = screen.queryByTestId("list-item");

  expect(navbar).toBeInTheDocument();
  expect(navbar.textContent).toBe("Todo list Redux");
  expect(navbar.tagName).toBe("NAV");
  expect(emptyMessage).toBeInTheDocument();
  expect(emptyMessage.textContent).toBe("Don't have task");

  expect(list).not.toBeInTheDocument();
  expect(screen.queryByTestId("btn-delete")).not.toBeInTheDocument();
  expect(navbar.tagName).not.toBe("HEADER");
  expect(navbar.textContent).not.toBe("Todo List Redux");
  userEvent.type(inputTask, "Testing app with Jest & Testin-library");
  userEvent.click(botonSave);
  await waitFor(() => {
    expect(screen.queryByTestId("list-item")).toBeInTheDocument();
  });

  expect(emptyMessage).not.toBeInTheDocument();
  expect(emptyMessage).not.toBe("Don't have task");
  expect(screen.queryByTestId("list-item").tagName).toBe("LI");
  // expect(screen.queryByTestId("list-item")).toMatchSnapshot();

  userEvent.click(screen.queryByTestId("list-item"));
  expect(screen.queryByTestId("list-item")).toHaveStyle({
    cursor: "pointer",
    color: "#bdbbbb",
  });
  const btnEliminar = screen.queryByTestId("btn-delete");

  expect(btnEliminar.textContent).toBe("DELETE");
  expect(btnEliminar.tagName).toBe("BUTTON");
  expect(btnEliminar.className).toBe("btn btn-danger");

  userEvent.click(btnEliminar);
  expect(emptyMessage.textContent).toBe("Don't have task");
  expect(screen.queryByTestId("empty-message")).toBeInTheDocument();
  expect(list).not.toBeInTheDocument();
  expect(btnEliminar).not.toBeInTheDocument();
});
