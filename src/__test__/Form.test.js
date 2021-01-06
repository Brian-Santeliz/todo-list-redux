import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../components/redux/store";
import Form from "../components/Form";
import "@testing-library/jest-dom/extend-expect";
// Mock to dispatch funtion submit
const dispatchMock = jest.spyOn(store, "dispatch");

render(
  <Provider store={store}>
    <Form />
  </Provider>
);
afterEach(cleanup);

test("Testing to <Form /> component", async () => {
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
  userEvent.click(botonSave);
  await waitFor(() => {
    const alertMessage = screen.queryByTestId("alert");
    expect(alertMessage.textContent).toBe("The task is required");
    expect(alertMessage.textContent).not.toBe("The task is Required");
    expect(alertMessage).toBeInTheDocument();
  });

  //Write input and submit form
  userEvent.type(inputTask, "Testing with JEST and TDD");
  userEvent.click(botonSave);
  await waitFor(() => {
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
    expect(dispatchMock).not.toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenCalled();
  });
});
