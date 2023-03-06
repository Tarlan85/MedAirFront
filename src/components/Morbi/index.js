import React from "react";
import HeaderMorby from "./components/HeaderMorby";
import MorbyContent from "./components/MorbyContent";
import { MorbyProvider } from "./context";
import Canvases from "./components/Canvases";
import MorbyTable from "./components/MorbyTable";
import Buttons from "./components/Buttons";
import Divider from "../Divider";

const index = () => {
  return (
    <MorbyProvider>
      <MorbyContent />
      <Buttons />
      <MorbyTable />
      <Divider />
      <HeaderMorby />
      <Divider />
      <Canvases />
    </MorbyProvider>
  );
};

export default index;
