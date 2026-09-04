import React from "react";
import ReactDOM from "react-dom/client";
// Bootstrap primeiro: as calculadoras usam form-control/input-group.
// Nossos tokens e o tema dark são carregados depois para vencer o reset do Bootstrap.
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
