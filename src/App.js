import React from "react";
import { AppRouter } from "./routes";
import { HashRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <AppRouter />
        </Router>
    );
};

export default App;
