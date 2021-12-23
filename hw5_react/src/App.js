import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <div>
      <Layout>
        <Layout.LayoutHeader></Layout.LayoutHeader>
        <Layout.LayoutSidebar></Layout.LayoutSidebar>
        <Layout.LayoutMain></Layout.LayoutMain>
        <Layout.LayoutFooter></Layout.LayoutFooter>
      </Layout>
    </div>
  );
}

export default App;
