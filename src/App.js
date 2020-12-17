import Navbar from "./components/Navbar";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { Container } from "./components/Container";
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Form />
        <TaskList />
      </Container>
    </>
  );
}

export default App;
