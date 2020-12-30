import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../components/redux/store";
import Form from "../components/Form";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test("Testing to <Form /> component", () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const botonSave = screen.getByTestId("boton");
  const inputTask = screen.getByTestId("inputTask");

  expect(botonSave).toBeInTheDocument();
  expect(botonSave.tagName).toBe("BUTTON");
  expect(botonSave.tagName).not.toBe("INPUT");
  expect(botonSave.textContent).toBe("Save");
  expect(botonSave.textContent).not.toBe("Guardar");

  expect(inputTask).toBeInTheDocument();
  expect(inputTask.tagName).toBe("INPUT");
  expect(inputTask.tagName).not.toBe("BUTTON");

  fireEvent.click(botonSave);
  const alertMessage = screen.getByTestId("alert");
  expect(alertMessage.textContent).toBe("The task is required");
  expect(alertMessage.textContent).not.toBe("The task is Required");
  expect(alertMessage).toBeInTheDocument();
});
