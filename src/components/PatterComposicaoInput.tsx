import { ComponentProps } from "react";

type InputDetailsProps = ComponentProps<"div">;

export const InputDetails = (props: InputDetailsProps) => {
  return <div {...props} />;
};

type InputRootProps = ComponentProps<"div">;

export const InputRoot = (props: InputRootProps) => {
  return (
    <div
      className="flex mx-1 gap-2 items-center rounded-lg border border-zinc-300 shadow-sm py-3 px-2"
      {...props}
    />
  );
};

type InputControlProps = ComponentProps<"input">;

export const InputControl = (props: InputControlProps) => {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
};
