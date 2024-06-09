import Catalogue from "./components/catalogue/Catalogue";
import Create from "./components/create/Create";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/users/login" element={<Login />} />
                <Route path="/users/register" element={<Register />} />
                <Route path="/users/create" element={<Create />} />
                <Route path="/users/logout" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
