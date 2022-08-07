import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from 'react'
import { Reset } from 'styled-reset'

import Login from "./pages/login";
import SignUp from "./pages/signup";
import Habitslist from "./pages/habitlist";
import Historic from "./pages/historic";
import Today from "./pages/today";

function App() {

    return (
        <BrowserRouter>
            <Reset />
            <Routes>
                <Route path="/" element={< Login />} />
                <Route path="/cadastro" element={< SignUp />} />
                <Route path="/habitos" element={< Habitslist />} />
                <Route path="/historico" element={< Historic />} />
                <Route path="/hoje" element={< Today />} />
            </Routes>
        </BrowserRouter>

    );
}

ReactDOM.render(<App />, document.querySelector('.root'))
