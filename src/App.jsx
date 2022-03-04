import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Modal from "./components/Modal/Modal";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<Modal />}>
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;
