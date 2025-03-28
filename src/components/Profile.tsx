import { LogOut } from "lucide-react";

export const Profile = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="https://github.com/fabricio-dev-front.png"
        className="rounded-full size-10"
        alt=""
      />

      <div className="flex flex-col -space-y-1 truncate">
        <span>Fabricio Pereira</span>
        <span className="truncate">@FabricioPereira.silvaaaaaaaaa</span>
      </div>

      <button className="ml-auto">
        <LogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  );
};
