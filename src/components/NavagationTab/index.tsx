"use client";

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { ItemTab } from "../ListTabs";

export const NavagationTab = () => {
  const [selected, setSelected] = useState("tab1");

  return (
    <Tabs.Root value={selected} onValueChange={setSelected}>
      <Tabs.List className="mt-7 w-full border-b border-zinc-200 flex items-center gap-4">
        <ItemTab
          value="tab1"
          label="My details"
          isSelect={selected === "tab1"}
        />
        <ItemTab value="tab2" label="Profile" isSelect={selected === "tab2"} />
        <ItemTab value="tab3" label="Password" isSelect={selected === "tab3"} />
        <ItemTab value="tab4" label="Team" isSelect={selected === "tab4"} />
        <ItemTab value="tab5" label="Plan" isSelect={selected === "tab5"} />
        <ItemTab value="tab6" label="Billing" isSelect={selected === "tab6"} />
        <ItemTab value="tab7" label="Email" isSelect={selected === "tab7"} />
        <ItemTab
          value="tab8"
          label="Notifications"
          isSelect={selected === "tab8"}
        />
        <ItemTab
          value="tab9"
          label="Integrations"
          isSelect={selected === "tab9"}
        />
        <ItemTab value="tab10" label="API" isSelect={selected === "tab10"} />
      </Tabs.List>
    </Tabs.Root>
  );
};
