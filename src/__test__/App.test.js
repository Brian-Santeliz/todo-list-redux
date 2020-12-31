import App from "../App";
import { render, screen, cleanup } from "@testing-library/react";
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
test("Testing to <App /> component", () => {
  const navbar = screen.getByTestId("navbar");
  const inputTask = screen.getByTestId("inputTask");
  const botonSave = screen.getByTestId("boton");
  const emptyMessage = screen.queryByTestId("empty-message");
  const list = screen.queryByTestId("list-item");

  expect(navbar).toBeInTheDocument();
  expect(navbar.textContent).toBe("Todo list Redux");
  expect(navbar.textContent).not.toBe("Todo List Redux");
  expect(navbar.tagName).toBe("NAV");
  expect(navbar.tagName).not.toBe("HEADER");
  expect(emptyMessage).toBeInTheDocument();
  expect(emptyMessage.textContent).toBe("Don't have task");
  expect(list).not.toBeInTheDocument();

  userEvent.type(inputTask, "Testing app with Jest & Testin-library");
  userEvent.click(botonSave);

  expect(screen.queryByTestId("list-item")).toBeInTheDocument();
  expect(emptyMessage).not.toBeInTheDocument();
  expect(emptyMessage).not.toBe("Don't have task");
});
