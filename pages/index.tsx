import type { ReactElement } from "react";
import DashboardLayout from "../layouts/Dashboard";
import BasicTable from "../components/tables/BasicTable";

const HomePage = () => {
  return (
    <div className="min-h-screen h-full">
      <BasicTable></BasicTable>
    </div>
  );
};

HomePage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default HomePage;
