import React, { memo } from "react";
import Divider from "../Divider";
import TabsTableMualice from "./components/TabsTableMualice";
import { MualiceProvider } from "./context";
import HeaderMualice from "./HeaderMualice";
import MualiceContent from "./MualiceContent";
import MualiceTable from "./MualiceTable";

const index = () => {
  return (
    <MualiceProvider>
      <HeaderMualice />
      <Divider />
      <MualiceContent />
      <MualiceTable />
      <Divider />
      <TabsTableMualice />
    </MualiceProvider>
  );
};

export default memo(index);
