"use client";

import { useState } from "react";

const fmt = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export default function SalaryCalculator({ salaryData }) {
  const roles = Object.keys(salaryData);
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const role = salaryData[selectedRole];

  return (
    <div>
      {/* Role selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        {roles.map((key) => (
          <button
            key={key}
            onClick={() => setSelectedRole(key)}
            className={`btn btn-sm ${
              selectedRole === key
                ? "btn-primary"
                : "btn-outline border-base-300 text-base-content/70"
            }`}
          >
            {salaryData[key].label}
          </button>
        ))}
      </div>

      {/* Salary table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-base-content/60">
              <th>Company Stage</th>
              <th>Hours/Week</th>
              <th>Monthly Retainer (Low)</th>
              <th>Monthly Retainer (High)</th>
            </tr>
          </thead>
          <tbody>
            {role.ranges.map((range, i) => (
              <tr key={i} className="hover">
                <td className="font-medium">{range.stage}</td>
                <td className="font-mono text-sm text-base-content/70">
                  {range.hours}
                </td>
                <td className="font-mono text-sm text-primary">
                  {fmt(range.low)}
                </td>
                <td className="font-mono text-sm text-primary">
                  {fmt(range.high)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick comparison */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body p-5">
            <p className="text-xs uppercase tracking-wider text-base-content/50 mb-1">
              Fractional (avg)
            </p>
            <p className="text-2xl font-bold text-primary font-mono">
              {fmt(
                Math.round(
                  role.ranges.reduce((a, r) => a + (r.low + r.high) / 2, 0) /
                    role.ranges.length
                )
              )}
              <span className="text-sm font-normal text-base-content/50">
                /mo
              </span>
            </p>
          </div>
        </div>
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body p-5">
            <p className="text-xs uppercase tracking-wider text-base-content/50 mb-1">
              Full-Time Equivalent
            </p>
            <p className="text-2xl font-bold text-base-content/60 font-mono">
              {fmt(
                Math.round(
                  role.ranges.reduce((a, r) => a + (r.low + r.high) / 2, 0) /
                    role.ranges.length
                ) * 4
              )}
              <span className="text-sm font-normal text-base-content/50">
                /mo
              </span>
            </p>
          </div>
        </div>
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body p-5">
            <p className="text-xs uppercase tracking-wider text-base-content/50 mb-1">
              You Save (est.)
            </p>
            <p className="text-2xl font-bold text-success font-mono">
              ~60-75%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
