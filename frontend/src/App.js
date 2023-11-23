import {BrowserRouter, Routes, Route} from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList/>}/>
        <Route path="add" element={<AddTask/>}/>
        <Route path="edit/:id" element={<EditTask/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;