import type { ReactElement } from "react";
import DashboardLayout from "../layouts/Dashboard";

const KpiPage = () => {
  return <div>KPI page</div>;
};

KpiPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default KpiPage;
