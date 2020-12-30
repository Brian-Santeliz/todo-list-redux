import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "../components/Form";
import { Provider } from "react-redux";
import { store } from "../components/redux/store";

test("Render <Form /> component, show a button and input", () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const botonSave = screen.getByTestId("boton");
  const inputTask = screen.getByTestId("inputTask");
  const btnText = screen.getByText("Save");

  expect(botonSave).toBeInTheDocument();
  expect(inputTask).toBeInTheDocument();
  expect(btnText).toBeInTheDocument();
});
