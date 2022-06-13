import App from "App";
import List from "pages/List";
import Login from "Login";
import Register from "Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const MyRouter = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>

            <Route path="/list" element={<List/>}></Route>
        </Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
    </Routes>



    </BrowserRouter>
)


export default MyRouter