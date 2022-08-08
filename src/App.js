import React from "react";
import Navbar from "./components/Navbar";
import MainBackground from "./components/MainBackground";
import BodyContent from "./components/BodyContent";
import Footer from "./components/Footer";
import BottomMenu from "./components/BottomMenu";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <MainBackground
        title="Restaurant Jannet"
        content="Indian Restaurant in Puchheim"
        subContent="Pre-Order available (Open Today: 17:00)"
      />
      <BodyContent />
      <Footer />
      <BottomMenu />
      <Sidebar />
    </>
  );
}

export default App;
