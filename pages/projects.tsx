import type { ReactElement } from "react";
import DashboardLayout from "../layouts/Dashboard";

const ProjectsPage = () => {
  return <div>Projects page</div>;
};

ProjectsPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default ProjectsPage;
