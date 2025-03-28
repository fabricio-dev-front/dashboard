import {
  ChevronDown,
  Home,
  Users,
  Flag,
  SquareCheckBig,
  BarChart,
  SquareStack,
} from "lucide-react";

export const MainNavegation = () => {
  const navegatios = [
    {
      label: "Home",
      href: "",
      icon: <Home />,
      id: 1,
    },

    {
      label: "Dashboard",
      href: "",
      icon: <BarChart />,
      id: 2,
    },

    {
      label: "Projects",
      href: "",
      icon: <SquareStack />,
      id: 3,
    },

    {
      label: "Tasks",
      href: "",
      icon: <SquareCheckBig />,
      id: 4,
    },

    {
      label: "Reporting",
      href: "",
      icon: <Flag />,
      id: 5,
    },

    {
      label: "Users",
      href: "",
      icon: <Users />,
      id: 6,
    },
  ];

  return (
    <nav className="space-y-1.5">
      {navegatios.map(({ label, icon, id }) => (
        <div
          key={id}
          className="flex items-center rounded text-zinc-500 cursor-pointer hover:bg-violet-50 hover:text-violet-700 p-3"
        >
          <span className="flex font-semibold items-center gap-1">
            {icon} {label}
          </span>
          <ChevronDown className="ml-auto" />
        </div>
      ))}
    </nav>
  );
};
