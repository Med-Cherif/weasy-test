import React from "react";
import Statistics from "./_components/statistics/Statistics";
import PageTitle from "@/components/common/PageTitle";
import withAuth from "@/components/guards/withAuth";

const DashboardPage = () => {
  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <Statistics />
    </>
  );
};

export default withAuth(DashboardPage);
