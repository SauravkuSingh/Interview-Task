import { Search, Bell } from 'lucide-react';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';

export default function TopHeader() {
  const { open } = useSidebar();

  return (
    <div className="flex items-center justify-between border-b border-slate-200/60 bg-white p-5">
      <div className="input_container flex items-center justify-center gap-1">
        {(!open || window.innerWidth <= 768) && (
          <div className="trigger_button mr-3 flex h-7 w-7 items-center justify-center rounded-md bg-slate-200/70">
            <SidebarTrigger className="" />
          </div>
        )}

        <div className="flex w-full min-w-[13rem] items-center gap-1 rounded-lg border px-2.5 py-2 sm:min-w-[18rem]">
          <Search className="mr-2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search or type command..."
            className="w-full max-w-[12rem] text-sm placeholder-gray-400 outline-none"
          />
          <span className="ml-2 hidden rounded-sm bg-slate-200/70 px-1 py-0.5 text-xs text-gray-500 sm:block">
            ⌘ /
          </span>
        </div>
      </div>
      <div className="ml-4 flex items-center gap-4">
        <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border border-slate-200/60 shadow-xs">
          <Bell className="h-5 w-5 cursor-pointer text-gray-600" />
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Profile"
          className="h-9 w-9 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
