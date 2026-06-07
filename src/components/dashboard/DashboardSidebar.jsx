

import { Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { GoSidebarExpand } from "react-icons/go";

export function DashboardSidebar() {
  const navItems = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];


  const renderNavItems = <nav className="flex flex-col gap-5">
    {navItems.map((item) => (
      <button
        key={item.label}
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-gray-400 cursor-pointer"
        type="button"
      >
        <item.icon className="size-5 text-muted" />
        {item.label}
      </button>
    ))}
  </nav>

  return (
    <>

      <aside className="hidden md:flex shrink-0 border-r border-default flex-col gap-5 w-68 p-4 rounded ">
        {renderNavItems}
      </aside>
      <Drawer >
        <Button className='md:hidden' variant="secondary">
          <GoSidebarExpand />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                {renderNavItems}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}