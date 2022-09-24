import { MainLayout } from "components/layouts";
import React from "react";
import { DashboardView } from "views/dashboard";

interface Props {}

const Dashboard: React.FC<Props> = () => (
  <MainLayout>
    <DashboardView />
  </MainLayout>
);

export default Dashboard;
