import { ReactElement, useState } from "react";
import Head from "next/head";
import SidebarMenu from "../components/sidebars/SidebarMenu";
import MainHeader from "../components/headers/MainHeader";

export default function DashboardLayout({
  children,
}: {
  children: ReactElement;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarMenu
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      ></SidebarMenu>

      <MainHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      ></MainHeader>

      <main className="md:ml-64 p-4 overflow-x-hidden">{children}</main>
    </div>
  );
}
