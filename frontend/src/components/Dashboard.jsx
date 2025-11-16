import React from "react";
import ChartBox from "./ChartBox";

export default function Dashboard({ stats }){
  return (
    <>
      <h2 className="text-xl mb-4">Welcome {stats.user}</h2>
      <div className="grid grid-cols-3 gap-4">
        <ChartBox label="Active Clients" value={stats.active_customers} />
        <ChartBox label="Monthly Revenue" value={`$${stats.mrr}`} />
        <ChartBox label="Conversion Rate" value={stats.conversion_rate} />
      </div>
    </>
  );
}
