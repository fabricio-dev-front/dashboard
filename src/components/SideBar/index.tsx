import { Search } from "lucide-react";
import { Logo } from "../Logo";
import { MainNavegation } from "./MainNavegation";

import { Settings, LifeBuoy } from "lucide-react";
import { UsedSpace } from "./UsedSpace";
import { Profile } from "../Profile";
import {
  InputControl,
  InputDetails,
  InputRoot,
} from "../PatterComposicaoInput";

export const SideBar = () => {
  const navigation = [
    {
      label: "Support",
      icon: <LifeBuoy />,
      id: 1,
    },
    { label: "Settings", icon: <Settings />, id: 2 },
  ];

  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
      <Logo />

      {/* 
        isso é um patter de composição, quando quebro um componente grande em pequenos componentes 
        para utlizar de varias formas  
      */}
      <InputRoot>
        <InputDetails>
          <Search />
        </InputDetails>
        <InputControl placeholder="Search..." />
      </InputRoot>

      <MainNavegation />

      <div className="mt-auto flex flex-col gap-0.5">
        {navigation.map(({ label, icon, id }) => (
          <div
            key={id}
            className="hover:text-violet-600 hover:bg-violet-50 px-4 py-2 rounded cursor-pointer"
          >
            <span className="flex items-center gap-1">
              {icon} {label}
            </span>
          </div>
        ))}
      </div>

      <UsedSpace />

      <div className="h-px bg-zinc-600" />

      <Profile />
    </aside>
  );
};
