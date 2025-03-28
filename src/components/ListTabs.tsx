"use client";

import * as Tabs from "@radix-ui/react-tabs";

type ItemTabProps = {
  value: string;
  label: string;
  isSelect?: boolean;
};

export const ItemTab = ({ value, label, isSelect = false }: ItemTabProps) => {
  return (
    <Tabs.Trigger
      className="relative px-4 pb-4 text-zinc-500 text-sm font-medium cursor-pointer hover:text-violet-700 data-[state=active]:text-violet-700"
      value={value}
    >
      {label}

      {isSelect && (
        <div className="absolute right-0 left-0 -bottom-px bg-violet-700 h-0.5" />
      )}
    </Tabs.Trigger>
  );
};
