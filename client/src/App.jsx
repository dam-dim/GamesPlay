import { Routes, Route } from "react-router-dom";

import Catalogue from "./components/catalogue/Catalogue";
import Create from "./components/create/Create";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Details from "./components/details/Details";

function App() {
    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create" element={<Create />} />
                <Route path="/logout" element={<Home />} />
                <Route path="/catalogue/:id/details" element={<Details />} />
            </Routes>
        </div>
    );
}

export default App;
