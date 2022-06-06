import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePageView } from "./views/HomePageView";
import { AddContactView } from "./views/AddContactView";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePageView />} />
        <Route path="/add" element={<AddContactView />} />
      </Route>
    </Routes>
  );
}

export default App;

//  <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
