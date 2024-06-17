import { useState } from "react";

import "./App.css";
import Landing from "./components/Landing";
import Features from "./components/Features";
import ProertyImages from "./components/ProertyImages";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Landing />
      <Features />
      <ProertyImages />
      <Footer />
    </>
  );
}

export default App;
