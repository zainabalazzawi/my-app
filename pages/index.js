import React from "react";
import Celebration from "../components/cake/celebration";
import Mini from "../components/cake/mini";
import Header from "../components/header/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Celebration />
      <Mini />
    </div>
  );
}
