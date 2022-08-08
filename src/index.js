import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from 'react'
import { Reset } from 'styled-reset'
import { useState } from "react";

import UserContext from "./context/context";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Habitslist from "./pages/habitlist";
import Historic from "./pages/historic";
import Today from "./pages/today";


function App() {
 
    const [id, setId] = useState([]);
    const [name, setName] = useState([]);
    const [image, setImage] = useState([]);
    const [token, setToken] = useState([]);
    const [bearertoken, setBearerToken] = useState([]);

    return (
        <BrowserRouter>
            <Reset />
            <UserContext.Provider value={{id, setId, name, setName, image, setImage, token, setToken, bearertoken, setBearerToken}}>
                <Routes>
                    <Route path="/" element={< Login />} />
                    <Route path="/cadastro" element={< SignUp />} />
                    <Route path="/habitos" element={< Habitslist />} />
                    <Route path="/historico" element={< Historic />} />
                    <Route path="/hoje" element={< Today />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>

    );
}

ReactDOM.render(<App />, document.querySelector('.root'))

