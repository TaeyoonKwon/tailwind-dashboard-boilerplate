import { MenuIcon } from "@heroicons/react/outline";
import { Dispatch, SetStateAction } from "react";

export default function MainHeader({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="md:ml-64 p-1 h-14 flex items-center bg-white shadow">
      <div className="md:hidden">
        <button
          type="button"
          className="h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="px-2">
        <p className="text-gray-900 font-bold">Title</p>
      </div>
    </header>
  );
}
