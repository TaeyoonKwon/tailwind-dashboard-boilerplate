import type { ReactElement } from "react";
import DashboardLayout from "../layouts/Dashboard";

const CalendarPage = () => {
  return <div>Calendar page</div>;
};

CalendarPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default CalendarPage;
