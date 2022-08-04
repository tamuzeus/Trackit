import ReactDOM from "react-dom";
import Login from "./components/login";
import * as React from 'react'
import { Reset } from 'styled-reset'

function App() {

    return (
        <>
            <Reset />
            <Login />
        </>

    );
}

ReactDOM.render(<App />, document.querySelector('.root'))
