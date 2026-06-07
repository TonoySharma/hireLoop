

import { Bell, Envelope, Gear,Briefcase, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { GoSidebarExpand } from "react-icons/go";

export function DashboardSidebar() {
  const navItems = [
    { icon: House, href: "/dashboard/recruiter", label: "Home" },
    { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
    { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Post A Job" },
    { icon: Briefcase, href: "/dashboard/recruiter/company", label: "Company Profile" },
    { icon: Envelope, href: "/dashboard/recruiter/messages", label: "Messages" },
    { icon: Person, href: "/dashboard/recruiter/profile", label: "Profile" },
    { icon: Gear, href: "/dashboard/recruiter/settings", label: "Settings" },
  ];


  const renderNavItems = <nav className="flex flex-col gap-5">
    {navItems.map((item) => (
      <Link href={item.href}
        key={item.label}
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-gray-400 cursor-pointer"
        type="button"
      >
        <item.icon className="size-5 text-muted" />
        {item.label}
      </Link>
    ))}
  </nav>

  return (
    <>

      <aside className="hidden md:flex shrink-0 border-r border-default flex-col gap-5 w-68 p-4 rounded ">
        {renderNavItems}
      </aside>
   <Drawer>
  <Button
    className="md:hidden flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-zinc-200 backdrop-blur-md hover:bg-zinc-800 transition-all"
    variant="secondary"
  >
    <GoSidebarExpand size={18} />
    <span>Menu</span>
  </Button>

  <Drawer.Backdrop className="bg-black/70 backdrop-blur-sm">
    <Drawer.Content
      placement="left"
      className="w-[280px] border-r border-zinc-800 bg-zinc-950/95 backdrop-blur-xl"
    >
      <Drawer.Dialog>
        <Drawer.CloseTrigger className="absolute right-4 top-4 rounded-lg p-2 hover:bg-zinc-800 transition-colors" />

        <Drawer.Header className="border-b border-zinc-800 pb-4">
          <Drawer.Heading className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            DriveFleet
          </Drawer.Heading>

          <p className="text-sm text-zinc-500 mt-1">
            Premium Car Rental Dashboard
          </p>
        </Drawer.Header>

        <Drawer.Body className="py-6">
          <nav className="space-y-2">
            {renderNavItems}
          </nav>
        </Drawer.Body>
      </Drawer.Dialog>
    </Drawer.Content>
  </Drawer.Backdrop>
</Drawer>
    </>
  );
}