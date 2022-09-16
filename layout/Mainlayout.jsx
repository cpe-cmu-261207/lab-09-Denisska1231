import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Mainlayout(props) {
  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/2825826.gif")`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Navbar />
      {props.children}

      <Footer />
    </div>
  );
}
