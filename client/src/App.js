import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import User from "./User";
import UpdateUser from "./UpdateUser";
import CreateUser from "./CreateUser";


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User/>}></Route>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/update/:id" element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
