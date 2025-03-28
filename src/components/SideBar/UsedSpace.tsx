export const UsedSpace = () => {
  return (
    <div className="bg-violet-50 py-5 px-4 rounded-lg flex flex-col gap-4">
      <div className="text-sm flex flex-col gap-1">
        <span className="text-violet-700 font-medium">Used space</span>
        <p className="font-normal text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      {/* barra de progresso */}
      <div className="h-2 bg-violet-100 rounded-full">
        <div className="bg-violet-600 h-2 rounded-full w-4/5" />
      </div>

      <div className="text-sm font-semibold flex items-center gap-3">
        <button type="submit" className="text-violet-500">
          Dismiss
        </button>
        <button type="submit" className="text-violet-700">
          Upgrade plan
        </button>
      </div>
    </div>
  );
};
