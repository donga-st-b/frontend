import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Slider from "./Temp";

export default function MainPage() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        {/* 컴포넌트 1 */}
      </div>
      <div style={{ marginBottom: "40px" }}>{/* 컴포넌트 2 */}</div>
      <div style={{ marginBottom: "40px" }}>{/* 컴포넌트 3 */}</div>
      <div style={{ marginBottom: "40px" }}>
        <Component4 />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <Component5 />
        {/* <Slider /> */}
      </div>
      <Footer />
    </div>
  );
}
