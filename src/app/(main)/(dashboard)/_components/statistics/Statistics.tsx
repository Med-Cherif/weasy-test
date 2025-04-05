"use client";

import React from "react";
import StatisticCard from "./StatisticCard";
import {
  LuDollarSign,
  LuPackage,
  LuShoppingCart,
  LuUsers,
} from "react-icons/lu";

const Statistics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatisticCard
        helperText="+20.1% from last month"
        title="Total Revenue"
        value="$45,231.89"
        Icon={LuDollarSign}
      />
      <StatisticCard
        helperText="+11 since last month"
        title="Products"
        value="48"
        Icon={LuShoppingCart}
      />
      <StatisticCard
        helperText="+1527 since last month"
        title="Total Orders"
        value="5468"
        Icon={LuPackage}
      />
      <StatisticCard
        helperText="+671 since last month"
        title="Customers"
        value="1734"
        Icon={LuUsers}
      />
    </div>
  );
};

export default Statistics;
