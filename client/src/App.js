import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import User from "./User";
import UpdateUser from "./UpdateUser";
import CreateUser from "./CreateUser";
import DeleteUser from "./DeleteUser";


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User/>}></Route>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/update" element={<UpdateUser/>}></Route>
        <Route path="/delete" element={<DeleteUser/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
