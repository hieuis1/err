import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Show from "./components/Show";

function App() {
  return (
    <>
      <Form></Form>
      <Show></Show>
    </>
  );
}

export default App;
