import React from "react";

export default function ChartBox({ label, value }){
  return (
    <div className="border rounded p-4 bg-gray-100">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
